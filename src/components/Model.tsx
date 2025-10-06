import { useGLTF } from "@react-three/drei";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Model() {
  const meshRef = useRef<THREE.Group>(null);

  // Memoize the model loading to prevent re-loading on re-renders
  const modelData = useMemo(() => {
    try {
      return useGLTF("/heromodel.glb");
    } catch (error) {
      console.warn("Model loading failed:", error);
      return null;
    }
  }, []);

  // Optimized animation with reduced frequency
  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.4) * 0.08;
      // Subtle rotation for visual interest
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  if (modelData?.scene) {
    // Clone the scene to avoid mutations
    const clonedScene = modelData.scene.clone();

    return (
      <group ref={meshRef}>
        <primitive object={clonedScene} scale={12.0} dispose={null} />
      </group>
    );
  }

  // Enhanced fallback with IEEE branding
  return (
    <group ref={meshRef}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[4, 4, 4]} />
        <meshStandardMaterial
          color="#10b981"
          wireframe={true}
          transparent={true}
          opacity={0.6}
        />
      </mesh>
      {/* IEEE logo placeholder */}
      <mesh position={[0, 0, 2.1]}>
        <planeGeometry args={[2, 1]} />
        <meshStandardMaterial
          color="#ffffff"
          transparent={true}
          opacity={0.8}
        />
      </mesh>
    </group>
  );
}

// Preload so it's cached before first render
try {
  useGLTF.preload("/heromodel.glb");
} catch (error) {
  console.log("Model preload failed, will load on demand");
}
