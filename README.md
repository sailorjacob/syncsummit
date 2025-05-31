# SyncSummit Website

A modern, minimalistic recreation of the syncsummit.com website with a light grey theme, featuring the official SyncSummit logo and prepared for migration from WordPress to Sanity CMS.

## 🎨 Design Features

- **Light Grey Color Scheme**: Professional grey palette (#666666) with coral red accents (#E63946)
- **Official SyncSummit Logo**: Black and white logo that overlaps the header for distinctive branding
- **Responsive Design**: Mobile-first approach with smooth animations
- **Modern UI**: Clean, minimalistic interface with card-based layouts
- **Dropdown Navigation**: Dark-themed dropdown menus for easy navigation

## 📁 Project Structure

```
syncsummit/
├── index.html              # Homepage
├── courses.html            # Online educational courses page
├── events.html             # Events and conferences page
├── styles.css              # Global shared styles
├── server.py               # Python server with clean URL support
├── package.json            # Project configuration
├── README.md               # Project documentation
├── sanity/                 # Sanity CMS schemas (example)
│   ├── homepage.js
│   ├── post.js
│   ├── event.js
│   └── schema.js
├── setup-sanity.sh         # Automated Sanity setup script
└── .env.example            # Environment variables template
```

## 🚀 Quick Start

### Running the Website

1. **Using Python server (recommended - supports clean URLs):**
   ```bash
   python3 server.py
   ```
   Access the site at http://localhost:8080
   
   Clean URLs work automatically:
   - `/courses` → `courses.html`
   - `/events` → `events.html`

2. **Using simple HTTP server:**
   ```bash
   python3 -m http.server 8080
   ```

3. **Using npm scripts:**
   ```bash
   npm run serve
   ```

## 🎯 Features

### Homepage
- Hero section with membership call-to-action
- Four main content cards (Courses, Summits, Consulting, Intelligence)
- Sidebar with event registrations and recent posts
- Integrated search functionality

### Navigation
- **COURSES**: The Sync Course, The Music Brands & Ads Course
- **EVENTS**: 2025/2026 Sync Summits, AdSync Summit, Video Archives
- **LISTENING SESSIONS**: Upcoming sessions with industry experts
- **ARTICLES**: Metadata guides, Sync Cafe, Blog
- **CONSULTING**: Professional services
- **ABOUT**: Company information

### Course Page
- Detailed course information with testimonials
- Two main courses:
  - THE SYNC COURSE: 16 weeks, 9 listening sessions, 7 classes – $699
  - The Music In Ads Course – $999

### Events Page
- 2025 Sync Summit NY & 2026 LA
- 2025 AdSync Summit (October 6-7)
- Video Archives with contact database access ($299)

## 🔧 Sanity CMS Integration

The website is prepared for Sanity CMS integration at syncsummit.sanity.studio.

### Setup Sanity

1. **Configure environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your Sanity project details
   ```

2. **Run automated setup:**
   ```bash
   chmod +x setup-sanity.sh
   ./setup-sanity.sh
   ```

3. **Update project ID in HTML files:**
   Replace `'your-project-id'` with your actual Sanity project ID in all HTML files.

### Content Types
- Homepage content
- Blog posts
- Events
- Courses
- Team members

## 🛠️ Development

### Adding New Pages
1. Create new HTML file following the existing structure
2. Include the navigation header and footer
3. Link to `styles.css` for consistent styling
4. Add page to navigation dropdowns

### Customizing Styles
- Global styles are in `styles.css`
- Color variables are defined in CSS `:root`
- Utility classes available for common patterns

## 📱 Mobile Support

- Responsive navigation with hamburger menu
- Touch-friendly dropdown menus
- Optimized layouts for all screen sizes
- Fast loading and smooth animations

## 🚢 Deployment

1. Build static files
2. Configure your web server to support clean URLs
3. Set up Sanity webhook for content updates
4. Enable CDN for optimal performance

## 📄 License

Copyright © 2025 Sync Summit. All rights reserved.

---

Built with ❤️ for the music sync community
