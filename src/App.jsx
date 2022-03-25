import "./App.scss";
import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { PointLight } from "three";

const SpiningMesh = ({ position, args, color }) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.x += 0.01));
  return (
    <mesh position={position} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
};

function App() {
  return (
    <>
      <Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 60 }}>
        <ambientLight intensity={0.7} />
        <directionalLight
          position={[0, 10, 0]}
          intensity={0.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-50}
          shadow-camera-right={-10}
          shadow-camera-top={20}
          shadow-camera-bottom={-20}

        />
        <pointLight position={[0, -10, 20]} intensity={0.5} />
        <pointLight position={[0, 42, 0]} intensity={0.5} />

        <group>
            mesh
        </group>
        <SpiningMesh position={[-2, 0, 0]} color="#E5E3C9" />
        <SpiningMesh position={[0, 0, 0]} args={[2, 1, 1]} color="#B4CFB0" />
        <SpiningMesh position={[2, 0, 0]} color="#789395" />
      </Canvas>
    </>
  );
}

export default App;
