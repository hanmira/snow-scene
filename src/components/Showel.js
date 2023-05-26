import { Environment, useGLTF } from "@react-three/drei";

function Showel() {
  const showel = useGLTF("../../assets/lowpoly_showel.glb");
  return (
    <>
      <primitive
        rotation-z={-100}
        object={showel.scene}
        position-x={6.3}
        position-y={0.8}
        position-z={-1.3}
        scale={0.001}
      />
      <Environment preset={"forest"} />
    </>
  );
}

export default Showel;
