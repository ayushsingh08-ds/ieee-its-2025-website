#!/bin/bash

# Build Release Script for IEEE Student Branch Website
# This script creates a static build that can be run without dependencies

echo "🚀 Building IEEE Student Branch Website for Release..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf build/
rm -rf release/
rm -f ieee-website-static.zip

# Install dependencies and build
echo "📦 Installing dependencies..."
npm install

echo "🔨 Building production version..."
npm run build

# Create release directory
echo "📁 Creating release package..."
mkdir -p release

# Copy build files to release
cp -r build/* release/

# Create a simple README for the static version
cat > release/README.txt << 'EOF'
IEEE Student Branch Website - Static Version
==========================================

This is a pre-built version of the IEEE Student Branch website.
No installation or dependencies required!

How to run:
1. Open 'index.html' in any web browser
2. That's it! The website will load and work completely offline.

Features:
- Fully responsive design
- Interactive components
- IEEE branding and styling
- Event information
- Team profiles
- Contact information

For developers:
- Source code: https://github.com/ayushsingh08-ds/ieee-its-2025-website
- Report issues: https://github.com/ayushsingh08-ds/ieee-its-2025-website/issues

Enjoy exploring the IEEE Student Branch website!
EOF

# Create zip file for easy distribution
echo "🗜️  Creating zip package..."
cd release
zip -r ../ieee-website-static.zip .
cd ..

echo "✅ Release package created successfully!"
echo "📁 Static files are in: ./release/"
echo "📦 Zip package: ./ieee-website-static.zip"
echo ""
echo "To distribute:"
echo "1. Upload 'ieee-website-static.zip' to GitHub Releases"
echo "2. Users can download, extract, and open 'index.html'"
echo "3. No dependencies or installation required!"
