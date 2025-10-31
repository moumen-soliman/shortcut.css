# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-10-31

### 🎉 Major Release - Complete Rewrite

This is a complete modernization of Shortcut.css with breaking changes from v1.x.

### ✨ Added

- **Modern Build System**: PostCSS, autoprefixer, and cssnano for optimized output
- **TypeScript Support**: Full type definitions for IntelliSense support
- **Modular Architecture**: 35+ modular CSS files for tree-shaking and smaller bundles
- **Modern CSS Features**:
  - CSS Grid utilities (grid-cols, grid-rows, gap)
  - Modern Flexbox utilities (flex-1, flex-auto, flex-none)
  - Aspect ratio utilities
  - Object fit and position utilities
  - Modern transform and transition utilities
- **Dark Mode Support**: Built-in dark mode with system preference detection
- **New Utility Classes**:
  - Modern responsive sizing (rem-based)
  - Extended shadow system (sm, md, lg, xl, 2xl)
  - Filter utilities (blur, brightness, grayscale, etc.)
  - Touch action utilities
  - Will-change utilities
  - Pointer events utilities
  - User select utilities
  - Scroll behavior utilities
- **Documentation**: Comprehensive README with examples
- **Demo Website**: Beautiful documentation site with live examples
- **GitHub Actions**: Automated CI/CD pipelines
- **Better Organization**: Clear section headers and improved code structure

### 🔄 Changed

- **Breaking**: Removed obsolete vendor prefixes (-webkit, -moz, -ms, -o)
  - Modern browsers no longer need them
  - Results in cleaner, smaller CSS
- **Breaking**: Fixed typo in variable names (`cucstom` → `custom`)
- **Breaking**: Modernized class naming for consistency
- **Improved**: Better default values for CSS custom properties
- **Improved**: More semantic utility class names
- **Updated**: License changed from ISC to MIT
- **Updated**: Package.json with proper exports and modern configuration
- **Enhanced**: Better browser compatibility through PostCSS

### 🐛 Fixed

- Fixed malformed `main` field in package.json
- Fixed typos throughout the CSS file
- Fixed inconsistent class naming
- Fixed missing utilities

### 🗑️ Removed

- Removed obsolete vendor prefixes
- Removed duplicate declarations
- Removed outdated browser-specific hacks

### 📦 Migration from v1.x

Most v1.x classes still work in v2.0 for backward compatibility. See the [Migration Guide](README.md#migration-from-v1x) in the README for details.

**Key Breaking Changes:**
1. Some vendor-prefixed properties removed (use autoprefixer if needed)
2. Custom property names fixed (e.g., `--cucstom-*` → `--custom-*`)
3. Modern unit preferences (rem over px for better accessibility)

### 🙏 Acknowledgments

Special thanks to the community for feedback and support over the years.

---

## [1.0.7] - 2017 (Legacy)

### Added
- Initial release of Shortcut.css
- Basic utility classes for common CSS properties
- Custom CSS variables support
- Both important and non-important versions

[2.0.0]: https://github.com/moumen-soliman/Shortcut.css/compare/v1.0.7...v2.0.0
[1.0.7]: https://github.com/moumen-soliman/Shortcut.css/releases/tag/v1.0.7

