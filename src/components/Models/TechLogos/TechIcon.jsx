import { Environment, useGLTF, Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

const TechIcon = ({ model }) => {
  const scene = useGLTF(model.modelPath);
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <Environment preset="city" />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale}>
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  );
};

export default TechIcon;
