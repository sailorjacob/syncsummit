# Sync Summit Website

This is a modern recreation of the Sync Summit website built with Next.js and Sanity CMS. It allows you to easily update all content without any coding knowledge.

## Project Structure

- **Root Directory**: Sanity Studio (Content Management System)
- **frontend/**: Next.js website (what your visitors see)

## How to Update Content

### 1. Access Sanity Studio

To update any content on your website:

1. Open your terminal/command prompt
2. Navigate to the project folder
3. Run: `npm run dev`
4. Open your browser and go to: `http://localhost:3000`
5. Log in with your Sanity account

### 2. Content Types You Can Manage

#### Homepage
- Hero section text
- Membership CTA
- Trending items
- Main sections

#### Events
- Sync Summit NY/LA
- AdSync Summit
- Listening Sessions
- Event dates, locations, prices, and descriptions

#### Courses
- The Sync Course
- Music, Brands & Ads Course
- Course descriptions, prices, and modules

#### Blog Posts
- Create new blog posts
- Edit existing posts
- Add images and videos
- Categorize content

#### Articles
- Metadata Style Guide
- Ten Metadata Commandments
- Other static content pages

#### Members & Speakers
- Add speaker profiles
- Update bio information
- Add photos

#### Site Settings
- Footer text
- Social media links
- Contact information

### 3. Publishing Changes

After making changes in Sanity Studio:
1. Click "Publish" on any edited document
2. Changes will appear on the website within seconds
3. No need to redeploy or restart anything!

## Running the Website Locally

### Sanity Studio
```bash
# From root directory
npm run dev
# Access at http://localhost:3000
```

### Frontend Website
```bash
# From root directory
cd frontend
npm run dev
# Access at http://localhost:3001
```

## Deployment

### Sanity Studio
Your Sanity Studio is already deployed at:
`https://syncsummit.sanity.studio`

### Frontend Website
The frontend can be deployed to:
- Vercel (recommended)
- Netlify
- Any Node.js hosting service

## Need Help?

### Common Tasks

**Adding a New Event:**
1. Go to Sanity Studio
2. Click "Events" in the sidebar
3. Click "Create new Event"
4. Fill in all fields
5. Click "Publish"

**Updating Homepage Content:**
1. Go to Sanity Studio
2. Click "Homepage" in the sidebar
3. Edit any section
4. Click "Publish"

**Adding a Blog Post:**
1. Go to Sanity Studio
2. Click "Blog Posts"
3. Click "Create new Blog Post"
4. Write your content
5. Add images if needed
6. Click "Publish"

### Support

For technical support or to add new features, contact your developer.

## Environment Variables

The frontend needs these environment variables (already configured):
- `NEXT_PUBLIC_SANITY_PROJECT_ID`: Your Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET`: "production"

## Backup

Your content is automatically backed up by Sanity. You can also export your data anytime from Sanity Studio under "Settings" → "Export".

---

Remember: All content updates are done through Sanity Studio. Never edit the code files directly unless you know what you're doing!
