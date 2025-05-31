import os
import re

def update_html_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove the header CSS section from each file
    header_pattern = r'/\* Header \*/.*?\.mobile-menu-toggle \{.*?margin-left: auto;\s*\}'
    if re.search(header_pattern, content, re.DOTALL):
        updated_content = re.sub(header_pattern, '', content, flags=re.DOTALL)
        
        # Also remove dropdown menu CSS if it exists
        dropdown_pattern = r'/\* Dropdown Menus \*/.*?\.dropdown-item:hover::before \{.*?color: var\(--.*?\);\s*\}'
        if re.search(dropdown_pattern, updated_content, re.DOTALL):
            updated_content = re.sub(dropdown_pattern, '', updated_content, flags=re.DOTALL)
        
        # Remove media query for mobile menu if it exists
        mobile_pattern = r'@media \(max-width: 768px\) \{.*?header \{.*?width: 100%;\s*justify-content: space-between;\s*\}\s*\}'
        if re.search(mobile_pattern, updated_content, re.DOTALL):
            updated_content = re.sub(mobile_pattern, '', updated_content, flags=re.DOTALL)
        
        # Make sure the file includes the styles.css link
        if '<link rel="stylesheet" href="styles.css">' not in updated_content:
            # Add the styles.css link after other stylesheet links
            head_end = '</head>'
            styles_link = '  <!-- Shared styles -->\n  <link rel="stylesheet" href="styles.css">\n  \n'
            updated_content = updated_content.replace(head_end, styles_link + head_end)
        
        # Write the updated content back to the file
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(updated_content)
        print(f"Updated {file_path} to use shared CSS")
    else:
        print(f"No header section found in {file_path}")

def main():
    # List of HTML files to update
    html_files = [
        'about.html',
        'articles.html',
        'consulting.html',
        'courses.html',
        'events.html',
        'listening-sessions.html',
        'membership.html',
        'index.html'
    ]
    
    # Update each file
    for file_name in html_files:
        if os.path.exists(file_name):
            update_html_file(file_name)
        else:
            print(f"File not found: {file_name}")
    
    print("All files updated to use shared CSS!")

if __name__ == "__main__":
    main() 