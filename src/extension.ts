import * as vscode from 'vscode';

const PX_REGEX = /(\d+(?:\.\d+)?)\s*px/gi;
const VW_REGEX = /(\d+(?:\.\d+)?)\s*vw/gi;
const VH_REGEX = /(\d+(?:\.\d+)?)\s*vh/gi;

function getConfig() {
  const config = vscode.workspace.getConfiguration('pxConverter');
  return {
    targetUnit: config.get<'vw' | 'vh'>('targetUnit', 'vw'),
    viewportWidth: config.get<number>('viewportWidth', 1920),
    viewportHeight: config.get<number>('viewportHeight', 1080),
    decimalPlaces: config.get<number>('decimalPlaces', 2),
  };
}

function roundValue(value: number, decimals: number): string {
  const rounded = Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
  return rounded % 1 === 0 ? rounded.toString() : rounded.toFixed(decimals).replace(/\.?0+$/, '');
}

function pxToVw(px: number, viewportWidth: number, decimals: number): string {
  return roundValue((px / viewportWidth) * 100, decimals) + 'vw';
}

function pxToVh(px: number, viewportHeight: number, decimals: number): string {
  return roundValue((px / viewportHeight) * 100, decimals) + 'vh';
}

function vwToPx(vw: number, viewportWidth: number, decimals: number): string {
  return roundValue((vw / 100) * viewportWidth, decimals) + 'px';
}

function vhToPx(vh: number, viewportHeight: number, decimals: number): string {
  return roundValue((vh / 100) * viewportHeight, decimals) + 'px';
}

function convertLinePxToVwVh(text: string, config: ReturnType<typeof getConfig>): string {
  const { targetUnit, viewportWidth, viewportHeight, decimalPlaces } = config;
  return text.replace(PX_REGEX, (_, num) => {
    const px = parseFloat(num);
    return targetUnit === 'vw' ? pxToVw(px, viewportWidth, decimalPlaces) : pxToVh(px, viewportHeight, decimalPlaces);
  });
}

function convertLineVwVhToPx(text: string, config: ReturnType<typeof getConfig>): string {
  const { viewportWidth, viewportHeight, decimalPlaces } = config;
  let result = text;
  result = result.replace(VW_REGEX, (_, num) => vwToPx(parseFloat(num), viewportWidth, decimalPlaces));
  result = result.replace(VH_REGEX, (_, num) => vhToPx(parseFloat(num), viewportHeight, decimalPlaces));
  return result;
}

function convertLinePxToVw() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return;

  const config = getConfig();
  const document = editor.document;
  const line = editor.selection.active.line;
  const lineText = document.lineAt(line).text;
  const newText = convertLinePxToVwVh(lineText, config);
  if (newText === lineText) return;

  const range = new vscode.Range(line, 0, line, lineText.length);
  editor.edit((eb) => eb.replace(range, newText));
}

function convertFilePxToVw() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return;

  const config = getConfig();
  const document = editor.document;
  const fullRange = new vscode.Range(0, 0, document.lineCount - 1, document.lineAt(document.lineCount - 1).text.length);
  const text = document.getText(fullRange);
  const newText = convertLinePxToVwVh(text, config);
  if (newText === text) return;

  editor.edit((eb) => eb.replace(fullRange, newText));
}

function convertLineVwToPx() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return;

  const config = getConfig();
  const document = editor.document;
  const line = editor.selection.active.line;
  const lineText = document.lineAt(line).text;
  const newText = convertLineVwVhToPx(lineText, config);
  if (newText === lineText) return;

  const range = new vscode.Range(line, 0, line, lineText.length);
  editor.edit((eb) => eb.replace(range, newText));
}

function convertFileVwToPx() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return;

  const config = getConfig();
  const document = editor.document;
  const fullRange = new vscode.Range(0, 0, document.lineCount - 1, document.lineAt(document.lineCount - 1).text.length);
  const text = document.getText(fullRange);
  const newText = convertLineVwVhToPx(text, config);
  if (newText === text) return;

  editor.edit((eb) => eb.replace(fullRange, newText));
}

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('pxConverter.convertLinePxToVw', convertLinePxToVw),
    vscode.commands.registerCommand('pxConverter.convertFilePxToVw', convertFilePxToVw),
    vscode.commands.registerCommand('pxConverter.convertLineVwToPx', convertLineVwToPx),
    vscode.commands.registerCommand('pxConverter.convertFileVwToPx', convertFileVwToPx)
  );
}

export function deactivate() {}
