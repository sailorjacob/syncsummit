#!/usr/bin/env python3
import os
import re

# List of HTML files to update (excluding index.html which is already updated)
html_files = [
    'courses.html',
    'events.html', 
    'listening-sessions.html',
    'consulting.html',
    'articles.html',
    'about.html',
    'membership.html'
]

for filename in html_files:
    if os.path.exists(filename):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Update desktop logo section height from 140px to 100px
        content = re.sub(
            r'(\.logo-section\s*{[^}]*height:\s*)140px;',
            r'\g<1>100px;',
            content,
            flags=re.DOTALL
        )
        
        # Update desktop logo height from 140px to 100px
        content = re.sub(
            r'(\.logo\s*{[^}]*height:\s*)140px;',
            r'\g<1>100px;',
            content,
            flags=re.DOTALL
        )
        
        # Add padding-top to logo section
        content = re.sub(
            r'(\.logo-section\s*{[^}]*padding-top:\s*)0;',
            r'\g<1>10px;',
            content,
            flags=re.DOTALL
        )
        
        # Update mobile logo height to 80px
        content = re.sub(
            r'(@media[^{]*768px[^}]*\.logo\s*{\s*height:\s*)100px;',
            r'\g<1>80px;',
            content,
            flags=re.DOTALL
        )
        
        # Update mobile logo section
        content = re.sub(
            r'(\.logo-section\s*{\s*margin-right:\s*1rem;\s*height:\s*)100px;(\s*margin-top:\s*0;)',
            r'\g<1>80px;\g<2>\n        padding-top: 5px;',
            content
        )
        
        # Update content section padding from 9rem/10rem to 8rem
        content = re.sub(
            r'(\.content-section\s*{\s*padding:\s*)(?:9|10)rem(\s+0\s+5rem;)',
            r'\g<1>8rem\g<2>',
            content
        )
        
        # Update mobile content section padding from 8rem/9rem to 7rem
        content = re.sub(
            r'(@media[^{]*768px[^}]*\.content-section\s*{\s*padding:\s*)(?:8|9)rem(\s+0\s+3rem;)',
            r'\g<1>7rem\g<2>',
            content,
            flags=re.DOTALL
        )
        
        # Write updated content
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ Updated {filename}")
    else:
        print(f"❌ File not found: {filename}")

print("\n✨ All pages updated with new logo size and positioning!") 