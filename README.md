# PX Converter

VS Code / Cursor extension: convert `px` ↔ `vw`/`vh` with a configurable viewport.

## Commands and shortcuts

| Action | Command | Default keybinding |
|--------|---------|--------------------|
| px → vw/vh on current line | `PX Converter: Convert px to vw/vh on current line` | **Alt+S** |
| px → vw/vh in entire file | `PX Converter: Convert px to vw/vh in entire file` | **Alt+D** |
| vw/vh → px on current line | `PX Converter: Convert vw/vh to px on current line` | **Ctrl+Alt+S** |
| vw/vh → px in entire file | `PX Converter: Convert vw/vh to px in entire file` | **Ctrl+Alt+D** |

## Settings

- **pxConverter.targetUnit** — Convert px to: `vw` or `vh` (default: `vw`).
- **pxConverter.viewportWidth** — Viewport width in px (default: `1920`).
- **pxConverter.viewportHeight** — Viewport height in px (default: `1080`).
- **pxConverter.decimalPlaces** — Number of decimal places when rounding converted values (default: `2`, range: 0–10).

Keybindings can be changed in VS Code/Cursor keyboard settings.

## Installation

### Option A: Run from source (no .vsix)

1. Open the extension folder in Cursor/VS Code: **File → Open Folder** → select the `vs-code-px-converter` folder.
2. In terminal: `npm install` then `npm run compile`.
3. Press **F5** (or **Run → Start Debugging**). A new window opens — that window has the extension loaded. Use it there.

### Option B: Install from VSIX file

1. Build and pack: `npm install`, `npm run compile`, then `npx @vscode/vsce package` (creates `px-converter-0.1.0.vsix`).
2. Open **Extensions**: press **Ctrl+Shift+X** (or **View → Extensions**).
3. In the **Extensions** panel, at the top right, click the **⋯** (three dots) button.
4. Choose **Install from VSIX...** and select the `.vsix` file.

## Local development

```bash
npm install
npm run compile
```

Open the project folder in Cursor/VS Code, then press **F5** to run the extension in a new window.

---

# PX Converter (Русский)

Расширение для VS Code / Cursor: конвертация `px` ↔ `vw`/`vh` с настраиваемым viewport.

## Команды и горячие клавиши

| Действие | Команда | Клавиши по умолчанию |
|----------|---------|----------------------|
| px → vw/vh на текущей строке | `PX Converter: Convert px to vw/vh on current line` | **Alt+S** |
| px → vw/vh во всём файле | `PX Converter: Convert px to vw/vh in entire file` | **Alt+D** |
| vw/vh → px на текущей строке | `PX Converter: Convert vw/vh to px on current line` | **Ctrl+Alt+S** |
| vw/vh → px во всём файле | `PX Converter: Convert vw/vh to px in entire file` | **Ctrl+Alt+D** |

## Настройки

- **pxConverter.targetUnit** — во что переводить px: `vw` или `vh` (по умолчанию `vw`).
- **pxConverter.viewportWidth** — ширина viewport в px (по умолчанию `1920`).
- **pxConverter.viewportHeight** — высота viewport в px (по умолчанию `1080`).
- **pxConverter.decimalPlaces** — сколько знаков после запятой оставлять при округлении (по умолчанию `2`, диапазон 0–10).

Горячие клавиши можно изменить в настройках клавиатуры VS Code/Cursor.

## Установка

### Вариант А: Запуск из исходников (без .vsix)

1. Откройте папку расширения в Cursor/VS Code: **Файл → Открыть папку** → выберите папку `vs-code-px-converter`.
2. В терминале: `npm install`, затем `npm run compile`.
3. Нажмите **F5** (или **Запуск → Начать отладку**). Откроется новое окно — в нём расширение уже подключено, пользуйтесь им там.

### Вариант Б: Установка из файла .vsix

1. Сборка и упаковка: `npm install`, `npm run compile`, затем `npx @vscode/vsce package` (создастся файл `px-converter-0.1.0.vsix`).
2. Откройте **Расширения**: **Ctrl+Shift+X** (или **Вид → Расширения**).
3. В панели **Расширения** вверху справа нажмите кнопку **⋯** (три точки).
4. Выберите **Install from VSIX...** и укажите файл `.vsix`.

## Локальная разработка

```bash
npm install
npm run compile
```

Откройте папку проекта в Cursor/VS Code и нажмите **F5** — расширение запустится в новом окне.
