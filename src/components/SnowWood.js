import { Environment, useGLTF } from "@react-three/drei";
function SnowWood({ x, y, z }) {
  const snowWood = useGLTF("../../assets/snow_covered_deadwood.glb");
  return (
    <>
      <primitive
        object={snowWood.scene}
        position-x={x}
        position-y={y}
        position-z={z}
        scale={1}
      />
      <Environment preset={"forest"} />
    </>
  );
}

export default SnowWood;
