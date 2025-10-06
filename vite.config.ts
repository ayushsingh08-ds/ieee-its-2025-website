import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Production optimizations for Vercel
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false,
    // Vercel has generous limits, but we still optimize
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        // Manual chunks for better caching and loading
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'ui-vendor': ['lucide-react']
        },
        // Asset file naming optimized for Vercel CDN
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') ?? [];
          let extType = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType ?? '')) {
            extType = 'images';
          } else if (/woff2?|eot|ttf|otf/i.test(extType ?? '')) {
            extType = 'fonts';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js'
      }
    },
    // Vercel deployment optimizations
    assetsDir: 'assets',
    emptyOutDir: true
  },
  // Preview server configuration
  preview: {
    port: 4173,
    host: true
  },
  // Base URL configuration for Vercel
  base: './',
  // Ensure compatibility with Vercel's environment
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
  }
})
