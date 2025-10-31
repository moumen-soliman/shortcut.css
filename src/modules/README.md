# Modular CSS Files

This directory contains modular CSS files that can be imported individually for tree-shaking and smaller bundle sizes.

## Usage

### Import Everything (Default)

```javascript
import 'shortcut-css';
```

### Import Specific Modules

```javascript
// Import only what you need
import 'shortcut-css/src/modules/variables.css';
import 'shortcut-css/src/modules/layout.css';
import 'shortcut-css/src/modules/flexbox.css';
import 'shortcut-css/src/modules/spacing.css';
```

## Available Modules

- `variables.css` - CSS custom properties and base styles
- `layout.css` - Display, position, overflow utilities
- `flexbox.css` - Flexbox utilities
- `grid.css` - CSS Grid utilities
- `spacing.css` - Margin and padding utilities
- `sizing.css` - Width and height utilities
- `typography.css` - Font, text utilities
- `backgrounds.css` - Background utilities
- `borders.css` - Border utilities
- `effects.css` - Shadows, opacity, filters
- `transitions.css` - Transition and transform utilities
- `interactions.css` - Cursor, pointer-events, user-select
- `accessibility.css` - Screen reader and accessibility utilities

## Bundle Size Optimization

By importing only the modules you need, you can significantly reduce your CSS bundle size:

```javascript
// Full bundle: ~50KB
import 'shortcut-css';

// Minimal bundle: ~5KB (example)
import 'shortcut-css/src/modules/variables.css';
import 'shortcut-css/src/modules/layout.css';
import 'shortcut-css/src/modules/spacing.css';
```

