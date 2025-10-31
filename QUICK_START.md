# Quick Start Guide

Get started with Shortcut.css in minutes!

## 🚀 Installation

### Option 1: NPM (Recommended)

```bash
npm install shortcut-css
```

### Option 2: CDN

```html
<link rel="stylesheet" href="https://unpkg.com/shortcut-css@latest/dist/shortcut.min.css">
```

## 📖 Basic Usage

### In HTML

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
    <div class="padding-40px border-radius-10 box-shadow-xl">
      <h1 class="font-size-4xl font-weight-bold txt-center">
        Hello, Shortcut.css!
      </h1>
      <p class="txt-center opacity-7">
        Build beautiful UIs with utility classes
      </p>
    </div>
  </div>
</body>
</html>
```

### In React

```jsx
import 'shortcut-css/dist/shortcut.css';

function App() {
  return (
    <div className="display-flex justify-content-center align-items-center height-screen">
      <div className="padding-40px border-radius-10 box-shadow-xl">
        <h1 className="font-size-4xl font-weight-bold txt-center">
          Hello, Shortcut.css!
        </h1>
        <p className="txt-center opacity-7">
          Build beautiful UIs with utility classes
        </p>
      </div>
    </div>
  );
}
```

### In Vue

```vue
<template>
  <div class="display-flex justify-content-center align-items-center height-screen">
    <div class="padding-40px border-radius-10 box-shadow-xl">
      <h1 class="font-size-4xl font-weight-bold txt-center">
        Hello, Shortcut.css!
      </h1>
      <p class="txt-center opacity-7">
        Build beautiful UIs with utility classes
      </p>
    </div>
  </div>
</template>

<script>
import 'shortcut-css/dist/shortcut.css';

export default {
  name: 'App'
}
</script>
```

## 🎨 Common Patterns

### Card Component

```html
<div class="padding-20px border-radius-10 box-shadow-lg">
  <h3 class="font-size-xl font-weight-bold margin-bottom-off">Card Title</h3>
  <p class="opacity-7 margin-top-off">Card description goes here.</p>
  <button class="padding-10px border-radius-5 cursor-pointer transition">
    Action
  </button>
</div>
```

### Flexbox Layout

```html
<div class="display-flex justify-content-space-between align-items-center">
  <div>Left content</div>
  <div>Right content</div>
</div>
```

### Grid Layout

```html
<div class="display-grid grid-cols-3 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Centered Content

```html
<div class="display-flex justify-content-center align-items-center height-screen">
  <div>Centered content</div>
</div>
```

### Button

```html
<button class="padding-10px padding-20px border-radius-5 cursor-pointer transition">
  Click Me
</button>
```

## 💡 Pro Tips

### 1. Modular Imports (Tree-Shaking)

Import only what you need:

```javascript
// Instead of importing everything
import 'shortcut-css';

// Import specific modules
import 'shortcut-css/src/modules/layout.css';
import 'shortcut-css/src/modules/flexbox.css';
import 'shortcut-css/src/modules/spacing.css';
```

### 2. TypeScript Support

Get IntelliSense for all classes:

```typescript
import type { ShortcutClass } from 'shortcut-css';

const myClasses: ShortcutClass = 'display-flex justify-content-center';
```

### 3. Dark Mode

```html
<!-- Auto dark mode -->
<body class="dark-auto">
  <!-- Content -->
</body>

<!-- Force dark mode -->
<body class="dark">
  <!-- Content -->
</body>
```

### 4. Custom Theming

```css
:root {
  --main-font: 'Inter', sans-serif;
  --custom-transition: all 0.4s ease;
  --headline-weight: 800;
}
```

## 📚 Next Steps

1. **Explore the docs**: Check out [README.md](README.md)
2. **View examples**: Open [docs/index.html](docs/index.html) in your browser
3. **Read the API**: See all available utilities in the README
4. **Join the community**: Star on GitHub, report issues, contribute!

## 🆘 Need Help?

- 📖 [Full Documentation](README.md)
- 🌐 [Demo Website](docs/index.html)
- 🐛 [Report Issues](https://github.com/moumen-soliman/Shortcut.css/issues)
- 💬 [Discussions](https://github.com/moumen-soliman/Shortcut.css/discussions)

---

**Happy coding! 🎉**

