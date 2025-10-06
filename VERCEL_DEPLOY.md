# 🚀 Vercel Deployment Guide

## Quick Deploy to Vercel

### Method 1: GitHub Integration (Recommended)

1. **Commit and push your changes:**
   ```bash
   git add .
   git commit -m "Vercel deployment optimization"
   git push origin main
   ```

2. **Deploy via Vercel Dashboard:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Connect your GitHub account
   - Import `ieee-its-2025-website` repository
   - Vercel auto-detects settings ✅
   - Click "Deploy"

### Method 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy to production
npm run deploy

# Deploy preview
npm run deploy:preview
```

## 📋 Vercel Configuration

The project includes optimized settings:

- **Framework**: Vite (auto-detected)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node.js Version**: 18.17.0 (via .nvmrc)
- **Install Command**: `npm install`

## 🔧 Build Optimizations

✅ **Performance**:
- Code splitting with manual chunks
- Asset optimization and caching headers
- Tree shaking and minification
- Font and image optimization

✅ **Vercel-Specific**:
- SPA routing configuration
- Cache-Control headers for static assets
- Build output optimized for Vercel CDN

## 🌐 Post-Deployment

After deployment:

1. **Custom Domain**: Add via Vercel dashboard
2. **Analytics**: Enable Vercel Analytics
3. **Environment Variables**: None needed (static site)
4. **Content Updates**: Edit data files and push to GitHub

## 📊 Performance Features

- **Edge Network**: Global CDN distribution
- **Automatic HTTPS**: SSL certificates included  
- **Image Optimization**: Built-in image processing
- **Build Caching**: Faster subsequent deployments
- **Preview Deployments**: Test branches automatically

## 🔄 Continuous Deployment

Every push to `main` branch triggers:
1. Automatic build on Vercel
2. Production deployment
3. Cache invalidation
4. Live site update

**Easy content management**: Just edit `src/data/*.ts` files and push!