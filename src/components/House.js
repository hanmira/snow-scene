import { Environment, OrbitControls, useGLTF } from "@react-three/drei";

function House() {
  const house = useGLTF("../../assets/House.glb");
  return (
    <>
      <OrbitControls
        autoRotate={true}
        minAzimuthAngle={Infinity}
        maxAzimuthAngle={Infinity}
        minPolarAngle={0}
        maxPolarAngle={Math.PI - Math.PI / 2}
        maxDistance={20}
        maxZoom={10}
      />
      <primitive
        object={house.scene}
        position-y={0}
        position-z={1}
        position-x={1}
        scale={0.85}
      />
      {/* <Environment preset={"dawn"} /> */}
    </>
  );
}

export default House;
