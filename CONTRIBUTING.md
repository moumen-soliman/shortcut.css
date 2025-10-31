# Contributing to Shortcut.css

Thank you for your interest in contributing to Shortcut.css! We welcome contributions from everyone.

## 🤝 How to Contribute

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples**
- **Describe the behavior you observed and what you expected**
- **Include screenshots if relevant**
- **Specify your environment** (browser, OS, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description of the proposed feature**
- **Explain why this enhancement would be useful**
- **Include examples of how it would be used**

### Pull Requests

1. **Fork the repository** and create your branch from `master` or `main`
2. **Make your changes** following our coding standards
3. **Test your changes** thoroughly
4. **Update documentation** if needed
5. **Write clear commit messages**
6. **Submit a pull request**

## 🛠️ Development Setup

### Prerequisites

- Node.js >= 14.0.0
- npm >= 7.0.0

### Getting Started

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/Shortcut.css.git
cd Shortcut.css

# Install dependencies
npm install

# Build the project
npm run build

# Watch for changes during development
npm run dev
```

## 📝 Coding Standards

### CSS Guidelines

1. **Use modern CSS** - No obsolete vendor prefixes (PostCSS handles this)
2. **Follow BEM-like naming** - Use semantic, descriptive class names
3. **Maintain consistency** - Follow existing patterns
4. **Comment your code** - Explain complex or non-obvious sections
5. **Test thoroughly** - Ensure your changes work across browsers

### Example

```css
/* Good */
.display-flex {
  display: flex !important;
}

/* Bad - vendor prefixes not needed */
.display-flex {
  -webkit-display: flex !important;
  display: flex !important;
}
```

### File Organization

- **Source files**: `src/`
- **Modular files**: `src/modules/`
- **Build output**: `dist/`
- **Documentation**: `docs/`
- **Scripts**: `scripts/`

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Examples:
```
feat: add container query utilities
fix: correct border-radius-circle calculation
docs: update README with grid examples
```

## 🧪 Testing

### Manual Testing

Test your changes in multiple browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Build Testing

```bash
# Run the full build
npm run build

# Check that all files are generated
ls -la dist/
```

## 📚 Documentation

When adding new features:

1. **Update README.md** with usage examples
2. **Add to CHANGELOG.md** following Keep a Changelog format
3. **Document in code** with clear comments
4. **Update demo site** if applicable (`docs/index.html`)

## 🎯 Project Structure

```
shortcut.css/
├── src/                    # Source CSS files
│   ├── shortcut.css       # Main CSS file
│   ├── shortcut-without-important.css
│   └── modules/           # Modular CSS files
├── dist/                  # Built files (generated)
├── docs/                  # Documentation website
├── scripts/               # Build scripts
│   ├── generate-types.js  # TypeScript definitions generator
│   └── create-modules.js  # Module extractor
├── .github/              # GitHub Actions workflows
├── package.json
├── postcss.config.js
├── README.md
├── CHANGELOG.md
└── CONTRIBUTING.md
```

## 🚀 Release Process

Releases are handled by maintainers:

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Create a git tag
4. Push to GitHub
5. GitHub Actions automatically publishes to NPM

## 💡 Adding New Utilities

When adding new utility classes:

1. **Add to main CSS file** (`src/shortcut.css`)
2. **Follow naming conventions** - Use existing patterns
3. **Include !important** - For override capabilities
4. **Add to appropriate section** - Keep utilities organized
5. **Document usage** - Add examples to README
6. **Test thoroughly** - Ensure it works as expected

### Example: Adding a New Utility

```css
/* In src/shortcut.css */

/* ==========================================================================
   Your New Utility Section
   ========================================================================== */

.my-new-utility { property: value !important; }
.my-new-utility-variant { property: different-value !important; }
```

Then update:
- README.md with usage examples
- TypeScript definitions (auto-generated on build)
- Documentation site if needed

## ❓ Questions?

Feel free to:
- Open an issue for discussion
- Join our [GitHub Discussions](https://github.com/moumen-soliman/Shortcut.css/discussions)
- Reach out to maintainers

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Shortcut.css! 🎉

