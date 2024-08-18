import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Astronomy = () => {
  const astronomy = useGLTF("./Asrtonomy_man/scene.gltf");

  return (
    <primitive
      object={astronomy.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  );
};

const AstronomyCanvas = () => {
  return (
    <>
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Astronomy />
          <Preload all />
        </Suspense>
      </Canvas>

      {/* Sketchfab embed */}
      <div className="sketchfab-embed-wrapper" style={{ marginTop: "20px" }}>
        <iframe
          title="Tripo Astronaut (animated)"
          frameBorder="0"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          src="https://sketchfab.com/models/bf065335fc194bfeac12439b804f6135/embed?ui_theme=dark"
          style={{ width: "640px", height: "480px" }}
        ></iframe>
        <p style={{ fontSize: "13px", fontWeight: "normal", margin: "5px", color: "#4A4A4A" }}>
          <a
            href="https://sketchfab.com/3d-models/tripo-astronaut-animated-bf065335fc194bfeac12439b804f6135?utm_medium=embed&utm_campaign=share-popup&utm_content=bf065335fc194bfeac12439b804f6135"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: "bold", color: "#1CAAD9" }}
          >
            Tripo Astronaut (animated)
          </a>{" "}
          by{" "}
          <a
            href="https://sketchfab.com/jungle_jim?utm_medium=embed&utm_campaign=share-popup&utm_content=bf065335fc194bfeac12439b804f6135"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: "bold", color: "#1CAAD9" }}
          >
            Jungle Jim
          </a>{" "}
          on{" "}
          <a
            href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=bf065335fc194bfeac12439b804f6135"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: "bold", color: "#1CAAD9" }}
          >
            Sketchfab
          </a>
        </p>
      </div>
    </>
  );
};

export default AstronomyCanvas;
