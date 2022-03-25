import "./App.scss";
import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import {
  MeshWobbleMaterial,
  softShadows,
  OrbitControls,
} from "@react-three/drei";
import {} from "react-spring";

softShadows();
const SpiningMesh = ({ position, args, color, speed, factor }) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.x += 0.01));
  return (
    <mesh position={position} ref={mesh} castShadow>
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        attach="material"
        color={color}
        speed={speed}
        factor={factor}
      />
    </mesh>
  );
};

function App() {
  return (
    <>
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [-5, 2, 10], fov: 60 }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[0, -10, 20]} intensity={0.5} />
        <pointLight position={[0, 42, 0]} intensity={0.5} />

        <group>
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[1, -3, 0]}
            receiveShadow
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.3} />
          </mesh>
        </group>

        <SpiningMesh
          position={[-2, 0, 0]}
          color="#E5E3C9"
          speed={1}
          factor={0.3}
        />
        <SpiningMesh
          position={[0, 0, 0]}
          args={[1, 2, 1]}
          color="#B4CFB0"
          speed={3}
          factor={0.5}
        />
        <SpiningMesh
          position={[2, 0, 0]}
          color="#789395"
          speed={1}
          factor={1}
        />
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
