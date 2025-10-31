# Shortcut.css

<div align="center">

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Size](https://img.shields.io/badge/size-~50KB-orange.svg)
![CSS](https://img.shields.io/badge/CSS-utility--first-blueviolet.svg)

**A modern, lightweight utility-first CSS framework**

Build beautiful interfaces with intuitive utility classes - no complex configurations needed.

[Getting Started](#getting-started) • [Documentation](#documentation) • [Examples](#examples) • [Migration Guide](#migration-from-v1x)

</div>

---

## ✨ Features

- 🎯 **Utility-First** - Compose designs directly in your HTML
- 🪶 **Lightweight** - ~50KB unminified, ~15KB minified
- 🚀 **Modern CSS** - Built with modern standards, no obsolete vendor prefixes
- 🎨 **Comprehensive** - 500+ utility classes covering all CSS properties
- 📦 **Zero Dependencies** - Just CSS, no JavaScript required
- 🔧 **Customizable** - CSS custom properties for easy theming
- 💪 **TypeScript Support** - Full IntelliSense support
- 🌙 **Dark Mode Ready** - Built-in dark mode support
- ⚡ **Performance** - Optimized for production with PostCSS
- 🔄 **Two Versions** - With or without `!important` declarations

## 🚀 Getting Started

### Installation

#### NPM

```bash
npm install shortcut-css
```

#### Yarn

```bash
yarn add shortcut-css
```

#### PNPM

```bash
pnpm add shortcut-css
```

#### CDN

```html
<!-- Latest version -->
<link rel="stylesheet" href="https://unpkg.com/shortcut-css@latest/dist/shortcut.min.css">

<!-- Specific version -->
<link rel="stylesheet" href="https://unpkg.com/shortcut-css@2.0.0/dist/shortcut.min.css">

<!-- Without !important declarations -->
<link rel="stylesheet" href="https://unpkg.com/shortcut-css@latest/dist/shortcut-without-important.min.css">
```

### Basic Usage

#### In HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="node_modules/shortcut-css/dist/shortcut.min.css">
  <title>My App</title>
</head>
<body>
  <div class="display-flex justify-content-center align-items-center height-screen">
    <div class="padding-20px border-radius-10 box-shadow-lg">
      <h1 class="font-size-3xl font-weight-bold txt-center margin-bottom-off">
        Welcome to Shortcut.css
      </h1>
      <p class="txt-center opacity-7 margin-top-off">
        Build beautiful UIs with utility classes
      </p>
    </div>
  </div>
</body>
</html>
```

#### In JavaScript/React

```javascript
// Import the CSS
import 'shortcut-css/dist/shortcut.css';

// In your component
function App() {
  return (
    <div className="display-flex flex-column align-items-center padding-40px">
      <h1 className="font-size-4xl font-weight-bold txt-center">
        Hello World
      </h1>
      <button className="padding-10px bg-transparent border cursor-pointer transition">
        Click Me
      </button>
    </div>
  );
}
```

#### With TypeScript

```typescript
import 'shortcut-css/dist/shortcut.css';
import type { ShortcutClass } from 'shortcut-css';

// Full IntelliSense support
const classes: ShortcutClass[] = [
  'display-flex',
  'justify-content-center',
  'align-items-center'
];
```

## 📖 Documentation

### Layout Utilities

#### Display

```html
<div class="display-block">Block element</div>
<div class="display-inline">Inline element</div>
<div class="display-flex">Flex container</div>
<div class="display-grid">Grid container</div>
<div class="display-none">Hidden element</div>
```

#### Flexbox

```html
<!-- Flex Direction -->
<div class="display-flex flex-row">Row direction</div>
<div class="display-flex flex-column">Column direction</div>

<!-- Justify Content -->
<div class="display-flex justify-content-center">
  <span>Centered</span>
</div>
<div class="display-flex justify-content-space-between">
  <span>Item 1</span>
  <span>Item 2</span>
</div>

<!-- Align Items -->
<div class="display-flex align-items-center">Vertically centered</div>
<div class="display-flex align-items-start">Aligned to start</div>

<!-- Flex Properties -->
<div class="flex-1">Flexible item</div>
<div class="flex-none">Non-flexible item</div>
```

#### CSS Grid

```html
<!-- Grid Template -->
<div class="display-grid grid-cols-3 gap-4">
  <div>Col 1</div>
  <div>Col 2</div>
  <div>Col 3</div>
</div>

<!-- Grid Span -->
<div class="display-grid grid-cols-4">
  <div class="col-span-2">Spans 2 columns</div>
  <div>Col 3</div>
  <div>Col 4</div>
</div>

<!-- Grid Gap -->
<div class="display-grid grid-cols-2 gap-8">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Spacing Utilities

#### Margin

```html
<!-- All sides -->
<div class="margin-4">1rem margin all sides</div>
<div class="margin-0">No margin</div>
<div class="margin-auto">Auto margin</div>

<!-- Individual sides -->
<div class="margin-top-auto">Auto top margin</div>
<div class="margin-bottom-off">No bottom margin</div>

<!-- Legacy pixel values -->
<div class="margin-20px">20px margin</div>
```

#### Padding

```html
<!-- All sides -->
<div class="padding-4">1rem padding all sides</div>
<div class="padding-0">No padding</div>

<!-- Individual sides -->
<div class="padding-top-off">No top padding</div>
<div class="padding-right-off">No right padding</div>

<!-- Legacy pixel values -->
<div class="padding-20px">20px padding</div>
```

### Sizing Utilities

#### Width

```html
<div class="width-full">100% width</div>
<div class="width-per-50">50% width</div>
<div class="width-screen">100vw width</div>
<div class="width-auto">Auto width</div>
<div class="width-200">200px width</div>
```

#### Height

```html
<div class="height-full">100% height</div>
<div class="height-screen">100vh height</div>
<div class="height-auto">Auto height</div>
<div class="height-100">100px height</div>
```

### Typography Utilities

#### Font Size

```html
<!-- Modern rem-based sizes -->
<p class="font-size-xs">Extra small text</p>
<p class="font-size-sm">Small text</p>
<p class="font-size-base">Base text</p>
<p class="font-size-lg">Large text</p>
<p class="font-size-xl">Extra large text</p>
<h1 class="font-size-4xl">4xl heading</h1>

<!-- Legacy pixel sizes -->
<p class="font-size-14">14px text</p>
<p class="font-size-16">16px text</p>
```

#### Font Weight

```html
<p class="font-weight-light">Light text</p>
<p class="font-weight-normal">Normal text</p>
<p class="font-weight-semibold">Semibold text</p>
<p class="font-weight-bold">Bold text</p>
```

#### Text Alignment

```html
<p class="txt-left">Left aligned</p>
<p class="txt-center">Center aligned</p>
<p class="txt-right">Right aligned</p>
<p class="txt-justify">Justified text</p>
```

#### Text Transform

```html
<p class="txt-transform-upp">UPPERCASE</p>
<p class="txt-transform-low">lowercase</p>
<p class="txt-transform-cap">Capitalize Each Word</p>
```

#### Text Decoration

```html
<a class="txt-dec-underline">Underlined link</a>
<del class="txt-dec-line-through">Strike through</del>
<span class="txt-dec-none">No decoration</span>
```

### Visual Utilities

#### Background

```html
<div class="bg-transparent">Transparent background</div>
<div class="bg-pos-center bg-size-cover bg-no-repeat">
  Background utilities
</div>
```

#### Border

```html
<div class="border">Default border</div>
<div class="border-0">No border</div>
<div class="border-radius-10">10px rounded corners</div>
<div class="border-radius-circle">Circular</div>
<div class="border-radius-full">Pill shape</div>
<div class="border-style-dashed">Dashed border</div>
```

#### Box Shadow

```html
<div class="box-shadow-sm">Small shadow</div>
<div class="box-shadow">Default shadow</div>
<div class="box-shadow-lg">Large shadow</div>
<div class="box-shadow-xl">Extra large shadow</div>
<div class="box-shadow-none">No shadow</div>
```

#### Opacity

```html
<div class="opacity-0">Invisible</div>
<div class="opacity-5">50% opacity</div>
<div class="opacity-10">100% opacity</div>
```

#### Filters

```html
<img class="filter-blur" src="image.jpg" alt="Blurred">
<img class="filter-grayscale" src="image.jpg" alt="Grayscale">
<img class="filter-brightness" src="image.jpg" alt="Brightened">
<img class="filter-invert" src="image.jpg" alt="Inverted">
```

### Positioning Utilities

```html
<div class="pos-relative">Relative positioning</div>
<div class="pos-absolute top-0 right-0">Absolute top-right</div>
<div class="pos-fixed bottom-0 left-0">Fixed bottom-left</div>
<div class="pos-sticky">Sticky positioning</div>
```

### Interaction Utilities

#### Cursor

```html
<div class="cursor-pointer">Clickable</div>
<div class="cursor-not-allowed">Not allowed</div>
<div class="cursor-grab">Grabbable</div>
<div class="cursor-wait">Loading</div>
```

#### User Select

```html
<p class="select-none">Can't select this text</p>
<p class="select-all">Select all on click</p>
```

#### Pointer Events

```html
<div class="pointer-events-none">Click through</div>
<div class="pointer-events-auto">Normal clicks</div>
```

### Animation Utilities

#### Transitions

```html
<button class="transition">Smooth transitions</button>
<div class="transition-colors">Color transitions only</div>
<div class="transition-transform">Transform transitions</div>
<div class="transition-fast">Fast transition</div>
<div class="transition-slow">Slow transition</div>
```

#### Transforms

```html
<div class="rotate-45">Rotated 45°</div>
<div class="scale-110">Scaled 110%</div>
<div class="scale-75">Scaled 75%</div>
```

### Utility Combinations

#### Card Component

```html
<div class="padding-20px border-radius-10 box-shadow-md bg-transparent">
  <h3 class="font-size-xl font-weight-bold margin-bottom-off">Card Title</h3>
  <p class="margin-top-off opacity-7">Card description goes here</p>
  <button class="padding-10px border-radius-5 cursor-pointer transition">
    Action
  </button>
</div>
```

#### Navigation Bar

```html
<nav class="display-flex justify-content-space-between align-items-center padding-20px box-shadow-sm">
  <div class="font-size-xl font-weight-bold">Logo</div>
  <div class="display-flex gap-4">
    <a class="txt-dec-none transition">Home</a>
    <a class="txt-dec-none transition">About</a>
    <a class="txt-dec-none transition">Contact</a>
  </div>
</nav>
```

#### Centered Content

```html
<div class="display-flex justify-content-center align-items-center height-screen">
  <div class="txt-center">
    <h1 class="font-size-4xl font-weight-bold">Welcome</h1>
    <p class="opacity-7">Get started with Shortcut.css</p>
  </div>
</div>
```

## 🎨 Customization

Shortcut.css uses CSS custom properties (variables) for easy customization:

```css
:root {
  /* Override default variables */
  --main-font: 'Inter', sans-serif;
  --headline-weight: 800;
  --custom-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Use custom variables */
.my-element {
  transition: var(--custom-transition);
}
```

### Available Custom Properties

```css
:root {
  /* Typography */
  --main-font: system-ui, sans-serif;
  --headline-color: inherit;
  --headline-weight: 700;
  --paragraph-size: 1rem;
  
  /* Spacing */
  --custom-margin: 0;
  --custom-padding: 0;
  
  /* Sizing */
  --custom-width: auto;
  --custom-height: auto;
  
  /* Visual */
  --custom-bg: transparent;
  --custom-border: none;
  --custom-box-shadow: none;
  --custom-border-radius: 0;
  
  /* Effects */
  --custom-transition: all 0.3s ease;
  --custom-filter: none;
  
  /* And many more...  */
}
```

## 🌙 Dark Mode

Shortcut.css includes built-in dark mode support:

```html
<!-- Auto dark mode (respects system preference) -->
<body class="dark-auto">
  <!-- Your content -->
</body>

<!-- Force dark mode -->
<body class="dark" data-theme="dark">
  <!-- Your content -->
</body>

<!-- Force light mode -->
<body class="light" data-theme="light">
  <!-- Your content -->
</body>
```

### Dark Mode with JavaScript

```javascript
// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
}

// Set dark mode based on system preference
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark');
}
```

## 📦 Build Options

### With `!important`

```javascript
import 'shortcut-css/dist/shortcut.css';
// or
import 'shortcut-css/dist/shortcut.min.css';
```

### Without `!important`

For projects where you want more control over specificity:

```javascript
import 'shortcut-css/dist/shortcut-without-important.css';
// or
import 'shortcut-css/dist/shortcut-without-important.min.css';
```

## 🔧 Development

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Watch for changes
npm run dev

# Format code
npm run format

# Lint CSS
npm run lint
```

## 📚 Migration from v1.x

### Breaking Changes

1. **Vendor Prefixes Removed** - Modern browsers no longer need them
2. **Typo Fixes** - `cucstom` → `custom` in variable names
3. **New Class Names** - More semantic and consistent naming
4. **Modern Units** - Prefer rem over px for better accessibility

### Migration Examples

#### v1.x → v2.0

```html
<!-- Old (v1.x) -->
<div class="display-flex align-center">
  <p class="font-size-20">Text</p>
</div>

<!-- New (v2.0) -->
<div class="display-flex align-items-center">
  <p class="font-size-xl">Text</p>
  <!-- or use legacy: -->
  <p class="font-size-20">Text</p>
</div>
```

### Compatibility

Most v1.x classes still work in v2.0 for backward compatibility. However, we recommend migrating to the new naming conventions for better long-term maintainability.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by the utility-first CSS philosophy
- Built with love for the web development community
- Special thanks to all contributors

## 📞 Support

- 🐛 [Report a Bug](https://github.com/moumen-soliman/Shortcut.css/issues)
- 💡 [Request a Feature](https://github.com/moumen-soliman/Shortcut.css/issues)
- 💬 [Join Discussions](https://github.com/moumen-soliman/Shortcut.css/discussions)

---

<div align="center">

Made with ❤️ by [Mo'men Soliman](https://github.com/moumen-soliman)

⭐ Star us on GitHub — it helps!

[GitHub](https://github.com/moumen-soliman/Shortcut.css) • [NPM](https://www.npmjs.com/package/shortcut-css)

</div>
