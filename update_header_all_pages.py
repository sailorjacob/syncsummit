import os
import re

def update_header_css_in_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Define the correct header CSS
    header_css = '''
    /* Header */
    header {
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1000;
      width: 90%;
      max-width: 1200px;
    }
    
    .navbar {
      display: flex;
      align-items: center;
      height: 70px;
      background-color: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-radius: 35px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      padding: 0 2rem;
      position: relative;
      overflow: visible;
    }
    
    .logo-section {
      position: relative;
      margin-right: 3rem;
      height: 80px;
      display: flex;
      align-items: flex-start;
      padding-top: 10px;
      margin-top: 0;
    }
    
    .logo {
      display: block;
      height: 80px;
      width: auto;
      position: relative;
      z-index: 10;
    }
    
    .logo img {
      height: 100%;
      width: auto;
      display: block;
      object-fit: contain;
    }
    '''
    
    # Find and replace header CSS
    header_pattern = r'/\* Header \*/.*?\.logo img \{.*?object-fit: contain;\s*\}'
    if re.search(header_pattern, content, re.DOTALL):
        updated_content = re.sub(header_pattern, header_css.strip(), content, flags=re.DOTALL)
        
        # Write the updated content back to the file
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(updated_content)
        print(f"Updated header in {file_path}")
    else:
        print(f"Could not find header section in {file_path}")

def main():
    # List of HTML files to update
    html_files = [
        'about.html',
        'articles.html',
        'consulting.html',
        'courses.html',
        'events.html',
        'listening-sessions.html',
        'membership.html'
    ]
    
    # Update each file
    for file_name in html_files:
        if os.path.exists(file_name):
            update_header_css_in_file(file_name)
        else:
            print(f"File not found: {file_name}")
    
    print("Header update completed!")

if __name__ == "__main__":
    main() 