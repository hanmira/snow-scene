import { OrbitControls, useGLTF } from "@react-three/drei";
function Ground() {
  const ground = useGLTF("../../assets/snow_raw_scan.glb");
  return (
    <>
      <OrbitControls
        minAzimuthAngle={Infinity}
        maxAzimuthAngle={Infinity}
        minPolarAngle={0}
        maxPolarAngle={Math.PI - Math.PI / 2}
        maxDistance={20}
        maxZoom={10}
      />
      <primitive
        object={ground.scene}
        position-y={0}
        position-z={1}
        position-x={1}
        scale={2.6}
      />
    </>
  );
}

export default Ground;
