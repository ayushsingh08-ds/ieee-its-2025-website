# 3D Model Integration Setup

## Overview

Your IEEE ITS website now includes an interactive 3D model viewer in the Hero section using React Three Fiber. The 3D scene replaces the static background image with an engaging, interactive experience.

## Components Created

### 1. Model.tsx

- **Purpose**: Loads and renders the 3D model from GLB file
- **Features**:
  - Floating animation using `useFrame`
  - Error handling with fallback wireframe geometry
  - Model preloading for better performance
- **File Path**: `src/components/Model.tsx`

### 2. Loader.tsx

- **Purpose**: Custom loading component with IEEE branding
- **Features**:
  - Progress bar with IEEE ITS colors
  - Animated loading text
  - Smooth transitions
- **File Path**: `src/components/Loader.tsx`

### 3. ModelViewer.tsx

- **Purpose**: Main Canvas wrapper with scene setup
- **Features**:
  - WebGL rendering with fallback
  - Optimized lighting setup (ambient + directional)
  - OrbitControls for user interaction
  - Auto-rotation enabled
  - Suspense boundary with custom loader
- **File Path**: `src/components/ModelViewer.tsx`

### 4. ErrorBoundary.tsx

- **Purpose**: Error handling for 3D components
- **Features**:
  - Graceful error handling
  - Fallback UI for failed 3D renders
  - Console error logging
- **File Path**: `src/components/ErrorBoundary.tsx`

## Dependencies Installed

```json
{
  "@react-three/fiber": "^8.15.12",
  "@react-three/drei": "^9.88.13",
  "three": "^0.158.0",
  "@types/three": "^0.158.3"
}
```

## Required Setup

### 1. Add Your 3D Model

Place your 3D model file in the public directory:

```
public/
└── heromodel.glb
```

**Model Requirements:**

- Format: GLB (recommended) or GLTF
- Size: Optimized for web (< 10MB recommended)
- Positioning: Model should be centered at origin (0,0,0)
- Scale: Component applies 1.5x scale by default

### 2. Model Optimization Tips

- Use tools like [gltf-pipeline](https://github.com/CesiumGS/gltf-pipeline) to compress
- Remove unnecessary textures and materials
- Use Draco compression if supported
- Optimize polygon count for web performance

## Configuration Options

### ModelViewer Props

```typescript
interface ModelViewerProps {
  className?: string;
  autoRotate?: boolean; // Default: true
  enableZoom?: boolean; // Default: true
  enablePan?: boolean; // Default: true
}
```

### Customizing Controls

Edit `ModelViewer.tsx` to modify:

- **Camera position**: Change `position={[0, 0, 5]}`
- **Auto-rotation speed**: Modify `autoRotateSpeed={0.5}`
- **Zoom limits**: Adjust `minDistance` and `maxDistance`

### Lighting Setup

Current lighting configuration:

```typescript
<ambientLight intensity={0.4} />
<directionalLight
  position={[10, 10, 5]}
  intensity={1}
  castShadow
/>
```

## Fallback Behavior

### If Model Fails to Load:

1. **Model.tsx** shows a wireframe cube with IEEE green color
2. **ErrorBoundary** catches React errors and shows fallback UI
3. Console logs help debug loading issues

### Performance Considerations:

- Model is preloaded using `useGLTF.preload()`
- Suspense boundaries prevent blocking renders
- WebGL detection with Canvas fallback
- Optimized chunk size warnings (normal for 3D libraries)

## Hero Section Integration

### CSS Updates

- `.hero-model-viewer`: Full container coverage with proper z-indexing
- `.hero-overlay`: Maintains content readability over 3D scene
- Responsive design maintained across all device sizes

### Content Positioning

- Hero text overlays the 3D scene
- Stats and buttons remain fully interactive
- Scroll indicator positioned over 3D background

## Troubleshooting

### Common Issues:

1. **Model not visible**:

   - Check if `heromodel.glb` is in `/public` folder
   - Verify model scale and positioning
   - Check browser console for loading errors

2. **Performance issues**:

   - Optimize model file size
   - Reduce polygon count
   - Consider texture compression

3. **Controls not working**:
   - Ensure OrbitControls are enabled
   - Check for CSS pointer-events conflicts
   - Verify canvas is receiving mouse events

### Browser Compatibility:

- **WebGL Required**: Modern browsers (Chrome 51+, Firefox 51+, Safari 10+)
- **Mobile Support**: iOS Safari 10+, Chrome Mobile 51+
- **Fallback**: ErrorBoundary provides graceful degradation

## Next Steps

1. **Add your model**: Place `heromodel.glb` in the public folder
2. **Test interaction**: Verify auto-rotation and orbit controls work
3. **Optimize positioning**: Adjust camera and model positioning as needed
4. **Performance testing**: Monitor loading times and frame rates
5. **Mobile testing**: Ensure smooth performance on mobile devices

## File Structure

```
src/
├── components/
│   ├── Model.tsx              # 3D model loader
│   ├── Loader.tsx             # Custom loading UI
│   ├── ModelViewer.tsx        # Main Canvas component
│   ├── ErrorBoundary.tsx      # Error handling
│   ├── Hero.tsx               # Updated with 3D integration
│   └── styles/
│       └── Hero.css           # Updated for 3D positioning
└── ...

public/
└── heromodel.glb              # Your 3D model (add this file)
```

The implementation is complete and ready for use once you add your 3D model file!
