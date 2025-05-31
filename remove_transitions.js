const fs = require('fs');
const path = require('path');

// Get all HTML files in the current directory
const htmlFiles = fs.readdirSync('.').filter(file => file.endsWith('.html'));

htmlFiles.forEach(file => {
  console.log(`Processing ${file}...`);
  
  let content = fs.readFileSync(file, 'utf8');
  
  // Remove the page transition HTML element
  content = content.replace(/<!-- Page Transition Overlay -->\s*<div class="page-transition">\s*<div class="transition-loader"><\/div>\s*<\/div>/g, '');
  
  // Remove the page transition JavaScript
  content = content.replace(/\/\/ Page Transition System[\s\S]*?const pageTransition[\s\S]*?smoothTransition\(href\);\s*}\);\s*}\);\s*/g, '');
  
  // Remove any membership-specific loading message JavaScript
  if (file === 'membership.html') {
    content = content.replace(/const loadingMessage[\s\S]*?}\);\s*}\);\s*/g, '');
  }
  
  // Remove the page transition CSS styles
  content = content.replace(/\/\* Page Transition Overlay \*\/[\s\S]*?@keyframes spin[\s\S]*?to \{ transform: rotate\(360deg\); \}\s*\}/g, '');
  
  fs.writeFileSync(file, content);
  console.log(`Removed transitions from ${file}`);
});

console.log('Finished removing page transitions from all HTML files.'); 