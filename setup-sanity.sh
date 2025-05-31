#!/bin/bash

# SyncSummit Sanity Setup Script
# This script helps you set up Sanity Studio for the SyncSummit website

echo "🎵 Welcome to SyncSummit Sanity Setup!"
echo "====================================="
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install Node.js first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check if Sanity CLI is installed
if ! command -v sanity &> /dev/null; then
    echo "📦 Installing Sanity CLI globally..."
    npm install -g @sanity/cli
fi

# Create Sanity Studio directory
echo ""
echo "📁 Creating Sanity Studio..."
cd ..
sanity init syncsummit-studio --create-project "SyncSummit CMS" --dataset production

# Copy schema files
echo ""
echo "📋 Copying schema files..."
cd syncsummit-studio

# Create schemas directory
mkdir -p schemas

# Copy our schema files
cp ../syncsummit/sanity/schemas/*.js schemas/

echo ""
echo "✅ Sanity Studio setup complete!"
echo ""
echo "Next steps:"
echo "1. cd syncsummit-studio"
echo "2. Update the schema imports in sanity.config.js"
echo "3. Run 'sanity dev' to start the studio"
echo "4. Update the project ID in ../syncsummit/index.html"
echo ""
echo "Your Sanity Studio will be available at: http://localhost:3333"
echo ""
echo "Happy content managing! 🚀" 