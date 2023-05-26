import { useGLTF } from "@react-three/drei";
function Snowman() {
  const snowman = useGLTF("../../assets/snowman.glb");
  return (
    <>
      <primitive
        object={snowman.scene}
        position-y={0.1}
        position-z={1}
        position-x={3.5}
        scale={0.35}
      />
    </>
  );
}

export default Snowman;
