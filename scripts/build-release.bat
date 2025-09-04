@echo off
REM Build Release Script for IEEE Student Branch Website (Windows)
REM This script creates a static build that can be run without dependencies

echo 🚀 Building IEEE Student Branch Website for Release...

REM Clean previous builds
echo 🧹 Cleaning previous builds...
if exist build rmdir /s /q build
if exist release rmdir /s /q release
if exist ieee-website-static.zip del ieee-website-static.zip

REM Install dependencies and build
echo 📦 Installing dependencies...
npm install

echo 🔨 Building production version...
npm run build

REM Create release directory
echo 📁 Creating release package...
mkdir release

REM Copy build files to release
xcopy build\* release\ /s /e /h /y

REM Create a simple README for the static version
echo IEEE Student Branch Website - Static Version > release\README.txt
echo ========================================== >> release\README.txt
echo. >> release\README.txt
echo This is a pre-built version of the IEEE Student Branch website. >> release\README.txt
echo No installation or dependencies required! >> release\README.txt
echo. >> release\README.txt
echo How to run: >> release\README.txt
echo 1. Open 'index.html' in any web browser >> release\README.txt
echo 2. That's it! The website will load and work completely offline. >> release\README.txt
echo. >> release\README.txt
echo Features: >> release\README.txt
echo - Fully responsive design >> release\README.txt
echo - Interactive components >> release\README.txt
echo - IEEE branding and styling >> release\README.txt
echo - Event information >> release\README.txt
echo - Team profiles >> release\README.txt
echo - Contact information >> release\README.txt
echo. >> release\README.txt
echo For developers: >> release\README.txt
echo - Source code: https://github.com/ayushsingh08-ds/ieee-its-2025-website >> release\README.txt
echo - Report issues: https://github.com/ayushsingh08-ds/ieee-its-2025-website/issues >> release\README.txt
echo. >> release\README.txt
echo Enjoy exploring the IEEE Student Branch website! >> release\README.txt

echo ✅ Release package created successfully!
echo 📁 Static files are in: .\release\
echo.
echo To distribute:
echo 1. Zip the 'release' folder
echo 2. Upload to GitHub Releases
echo 3. Users can download, extract, and open 'index.html'
echo 4. No dependencies or installation required!

pause
