import { useGLTF } from "@react-three/drei";
function SnowBush() {
  const snowBush = useGLTF("../../assets/snow_bush.glb");
  return (
    <>
      <primitive
        object={snowBush.scene}
        position-y={-0.2}
        position-z={1}
        position-x={5}
        scale={0.05}
      />
    </>
  );
}

export default SnowBush;
