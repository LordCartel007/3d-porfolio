import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const HeroExperience = () => {
  // using canvas to create a cool animation
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      {/* the light in 3d */}
      <ambientLight intensity={0.2} color="#1a1a40" />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      {/*allows us to control object */}
      <OrbitControls />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="teal" />
      </mesh>
    </Canvas>
  );
};

export default HeroExperience;
