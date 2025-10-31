#!/usr/bin/env node

/**
 * Generate TypeScript definitions for Shortcut.css classes
 * This provides IntelliSense support in TypeScript/JavaScript projects
 */

const fs = require('fs');
const path = require('path');

// Read the CSS file
const cssPath = path.join(__dirname, '../src/shortcut.css');
const cssContent = fs.readFileSync(cssPath, 'utf-8');

// Extract class names from CSS
const classRegex = /\.([a-zA-Z_][\w-]*)\s*{/g;
const classes = new Set();
let match;

while ((match = classRegex.exec(cssContent)) !== null) {
  classes.add(match[1]);
}

// Sort classes alphabetically
const sortedClasses = Array.from(classes).sort();

// Generate TypeScript definition
const typeDefinition = `// Type definitions for Shortcut.css v2.0.0
// Project: https://github.com/moumen-soliman/shortcut.css
// Definitions by: Mo'men Soliman
// TypeScript Version: 4.0+

declare module 'shortcut-css' {
  /**
   * All available CSS class names in Shortcut.css
   */
  export type ShortcutClass =
${sortedClasses.map(cls => `    | '${cls}'`).join('\n')};

  /**
   * Utility type for className props that accept Shortcut.css classes
   */
  export type ClassName = ShortcutClass | string;
}

// For CSS module imports
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// Allow importing CSS directly
declare module 'shortcut-css/dist/shortcut.css';
declare module 'shortcut-css/dist/shortcut.min.css';
declare module 'shortcut-css/dist/shortcut-without-important.css';
declare module 'shortcut-css/dist/shortcut-without-important.min.css';

export {};
`;

// Write the type definition file
const outputPath = path.join(__dirname, '../dist/index.d.ts');
const distDir = path.dirname(outputPath);

// Create dist directory if it doesn't exist
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.writeFileSync(outputPath, typeDefinition);

console.log(`✓ Generated TypeScript definitions with ${sortedClasses.length} classes`);
console.log(`✓ Output: ${outputPath}`);

