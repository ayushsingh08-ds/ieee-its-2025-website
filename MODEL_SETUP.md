# 3D Model Setup Instructions

## Required File

Please place your 3D model file named `heromodel.glb` in the `public/` folder of your project.

The file should be located at:

```
public/heromodel.glb
```

## Model Recommendations

- **Format**: GLB (binary GLTF) is preferred for web performance
- **Size**: Keep under 10MB for optimal loading
- **Polygons**: Aim for under 100k polygons for smooth performance
- **Textures**: Use compressed textures (1024x1024 or smaller)

## Converting Models

If you have models in other formats (OBJ, FBX, etc.), you can convert them using:

- [Blender](https://www.blender.org/) (free)
- [glTF Validator](https://github.com/KhronosGroup/glTF-Validator)
- Online converters like [Sketchfab](https://sketchfab.com/)

## Model Features

The current setup includes:

- Auto-rotation for showcase effect
- Orbit controls for user interaction
- Progressive loading with custom loader
- Environment lighting for realistic rendering
- Optimized camera positioning

## Fallback

If no model is present, the component will show a loading state. You can modify the Loader component to show a fallback image instead.
