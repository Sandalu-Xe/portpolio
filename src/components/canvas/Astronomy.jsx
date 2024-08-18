import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Star = () => {
  // Assuming you have a 3D model for a star or galaxy located in the public folder
  const star = useGLTF("./Asrtonomy_man/scene.gltf");

  return (
    <primitive object={star.scene} scale={3} position-y={0} rotation-y={0} />
  );
};

const AstronomyCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 60,
        near: 0.1,
        far: 500,
        position: [-5, 3, 7],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Star />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default AstronomyCanvas;
