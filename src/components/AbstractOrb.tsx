import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, MathUtils } from 'three';
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei';

export function AbstractOrb() {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      
      // React to mouse movement
      const targetX = (state.pointer.x * Math.PI) / 4;
      const targetY = (state.pointer.y * Math.PI) / 4;
      
      meshRef.current.rotation.x = MathUtils.lerp(meshRef.current.rotation.x, targetY, 0.1);
      meshRef.current.rotation.y = MathUtils.lerp(meshRef.current.rotation.y, targetX, 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.5}>
        <MeshDistortMaterial
          color="#111111"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          envMapIntensity={1}
        />
      </Sphere>
    </Float>
  );
}
