#!/usr/bin/env node

/**
 * Extract modular CSS files from the main shortcut.css file
 * This allows users to import only the utilities they need
 */

const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '../src/shortcut.css');
const modulesDir = path.join(__dirname, '../src/modules');
const cssContent = fs.readFileSync(cssPath, 'utf-8');

// Ensure modules directory exists
if (!fs.existsSync(modulesDir)) {
  fs.mkdirSync(modulesDir, { recursive: true });
}

// Define module sections based on comment headers
const modules = {
  'variables.css': {
    start: '/* ==========================================================================\n   CSS Custom Properties (Variables)',
    end: '/* ==========================================================================\n   Alignment Utilities',
  },
  'base.css': {
    start: '/* ==========================================================================\n   Base Styles',
    end: '/* ==========================================================================\n   Alignment Utilities',
  },
  'alignment.css': {
    start: '/* ==========================================================================\n   Alignment Utilities',
    end: '/* ==========================================================================\n   Background Utilities',
  },
  'backgrounds.css': {
    start: '/* ==========================================================================\n   Background Utilities',
    end: '/* ==========================================================================\n   Border Utilities',
  },
  'borders.css': {
    start: '/* ==========================================================================\n   Border Utilities',
    end: '/* ==========================================================================\n   Box Shadow Utilities',
  },
  'shadows.css': {
    start: '/* ==========================================================================\n   Box Shadow Utilities',
    end: '/* ==========================================================================\n   Box Sizing Utilities',
  },
  'box-sizing.css': {
    start: '/* ==========================================================================\n   Box Sizing Utilities',
    end: '/* ==========================================================================\n   Clear Utilities',
  },
  'clear.css': {
    start: '/* ==========================================================================\n   Clear Utilities',
    end: '/* ==========================================================================\n   Cursor Utilities',
  },
  'cursor.css': {
    start: '/* ==========================================================================\n   Cursor Utilities',
    end: '/* ==========================================================================\n   Direction Utilities',
  },
  'direction.css': {
    start: '/* ==========================================================================\n   Direction Utilities',
    end: '/* ==========================================================================\n   Display Utilities',
  },
  'display.css': {
    start: '/* ==========================================================================\n   Display Utilities',
    end: '/* ==========================================================================\n   Flexbox Utilities',
  },
  'flexbox.css': {
    start: '/* ==========================================================================\n   Flexbox Utilities',
    end: '/* ==========================================================================\n   Grid Utilities',
  },
  'grid.css': {
    start: '/* ==========================================================================\n   Grid Utilities',
    end: '/* ==========================================================================\n   Filter Utilities',
  },
  'filters.css': {
    start: '/* ==========================================================================\n   Filter Utilities',
    end: '/* ==========================================================================\n   Float Utilities',
  },
  'float.css': {
    start: '/* ==========================================================================\n   Float Utilities',
    end: '/* ==========================================================================\n   Font Utilities',
  },
  'typography.css': {
    start: '/* ==========================================================================\n   Font Utilities',
    end: '/* ==========================================================================\n   Height Utilities',
  },
  'height.css': {
    start: '/* ==========================================================================\n   Height Utilities',
    end: '/* ==========================================================================\n   Justify Content Utilities',
  },
  'justify.css': {
    start: '/* ==========================================================================\n   Justify Content Utilities',
    end: '/* ==========================================================================\n   Margin Utilities',
  },
  'margin.css': {
    start: '/* ==========================================================================\n   Margin Utilities',
    end: '/* ==========================================================================\n   Padding Utilities',
  },
  'padding.css': {
    start: '/* ==========================================================================\n   Padding Utilities',
    end: '/* ==========================================================================\n   Width Utilities',
  },
  'width.css': {
    start: '/* ==========================================================================\n   Width Utilities',
    end: '/* ==========================================================================\n   Opacity Utilities',
  },
  'opacity.css': {
    start: '/* ==========================================================================\n   Opacity Utilities',
    end: '/* ==========================================================================\n   Overflow Utilities',
  },
  'overflow.css': {
    start: '/* ==========================================================================\n   Overflow Utilities',
    end: '/* ==========================================================================\n   Position Utilities',
  },
  'position.css': {
    start: '/* ==========================================================================\n   Position Utilities',
    end: '/* ==========================================================================\n   Text Utilities',
  },
  'text.css': {
    start: '/* ==========================================================================\n   Text Utilities',
    end: '/* ==========================================================================\n   Transition Utilities',
  },
  'transitions.css': {
    start: '/* ==========================================================================\n   Transition Utilities',
    end: '/* ==========================================================================\n   Transform Utilities',
  },
  'transforms.css': {
    start: '/* ==========================================================================\n   Transform Utilities',
    end: '/* ==========================================================================\n   Vertical Align Utilities',
  },
  'vertical-align.css': {
    start: '/* ==========================================================================\n   Vertical Align Utilities',
    end: '/* ==========================================================================\n   Visibility Utilities',
  },
  'visibility.css': {
    start: '/* ==========================================================================\n   Visibility Utilities',
    end: '/* ==========================================================================\n   Z-Index Utilities',
  },
  'z-index.css': {
    start: '/* ==========================================================================\n   Z-Index Utilities',
    end: '/* ==========================================================================\n   Additional Modern Utilities',
  },
  'modern-utilities.css': {
    start: '/* ==========================================================================\n   Additional Modern Utilities',
    end: '/* ==========================================================================\n   Dark Mode Support',
  },
  'dark-mode.css': {
    start: '/* ==========================================================================\n   Dark Mode Support',
    end: '/* ==========================================================================\n   Responsive Utilities Helpers',
  },
  'helpers.css': {
    start: '/* ==========================================================================\n   Responsive Utilities Helpers',
    end: '/* ==========================================================================\n   Print Utilities',
  },
  'print.css': {
    start: '/* ==========================================================================\n   Print Utilities',
    end: null, // Last section
  },
};

// Extract header comment
const headerEnd = cssContent.indexOf('/* ==========================================================================');
const header = cssContent.substring(0, headerEnd);

// Extract each module
Object.entries(modules).forEach(([filename, { start, end }]) => {
  const startIndex = cssContent.indexOf(start);
  if (startIndex === -1) {
    console.warn(`⚠ Warning: Could not find start marker for ${filename}`);
    return;
  }

  let content;
  if (end === null) {
    // Last section - take everything till the end
    content = cssContent.substring(startIndex);
  } else {
    const endIndex = cssContent.indexOf(end);
    if (endIndex === -1) {
      console.warn(`⚠ Warning: Could not find end marker for ${filename}`);
      return;
    }
    content = cssContent.substring(startIndex, endIndex);
  }

  const moduleContent = header + '\n' + content;
  const modulePath = path.join(modulesDir, filename);
  fs.writeFileSync(modulePath, moduleContent);
  console.log(`✓ Created ${filename}`);
});

// Create an index file that imports all modules
const indexContent = `/*!
 * Shortcut.css v2.0.0 - Modular Import
 * Import all modules
 */

/* Variables and Base */
@import './variables.css';
@import './base.css';

/* Layout */
@import './display.css';
@import './position.css';
@import './flexbox.css';
@import './grid.css';

/* Spacing */
@import './margin.css';
@import './padding.css';

/* Sizing */
@import './width.css';
@import './height.css';

/* Typography */
@import './typography.css';
@import './text.css';

/* Backgrounds & Borders */
@import './backgrounds.css';
@import './borders.css';

/* Effects */
@import './shadows.css';
@import './opacity.css';
@import './filters.css';

/* Transitions & Animations */
@import './transitions.css';
@import './transforms.css';

/* Interactions */
@import './cursor.css';

/* Utilities */
@import './alignment.css';
@import './justify.css';
@import './overflow.css';
@import './visibility.css';
@import './z-index.css';
@import './vertical-align.css';
@import './float.css';
@import './clear.css';
@import './direction.css';
@import './box-sizing.css';

/* Modern Features */
@import './modern-utilities.css';
@import './dark-mode.css';
@import './helpers.css';
@import './print.css';
`;

fs.writeFileSync(path.join(modulesDir, 'index.css'), indexContent);
console.log('✓ Created index.css');

console.log(`\n✨ Successfully created ${Object.keys(modules).length + 1} modular CSS files`);

