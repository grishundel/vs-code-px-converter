# PX Converter

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

Горячие клавиши можно изменить в настройках клавиатуры VS Code/Cursor.

## Установка из папки

1. Соберите расширение: `npm run compile`
2. В VS Code/Cursor: **Extensions** → **...** → **Install from VSIX...** или запустите из папки (F5 — Run Extension).

## Локальная разработка

```bash
npm install
npm run compile
```

Затем нажмите F5 в VS Code, откроется новое окно с установленным расширением.
