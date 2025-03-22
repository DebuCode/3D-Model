import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const CarModel = () => {
  const carRef = useRef();
  const { scene } = useGLTF("/models/car.glb");
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (hovered) {
      carRef.current.rotation.y += 0.02; 
    }
  });

  return (
    <group
      ref={carRef}
      scale={0.8}
      position={[0, -1, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <primitive object={scene} />
    </group>
  );
};

const Model = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 5]} intensity={1.5} />
        <Suspense fallback={null}>
          <CarModel />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default Model;
