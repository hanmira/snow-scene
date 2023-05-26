import { useGLTF } from "@react-three/drei";

function SnowFlake() {
  const snowFlake = useGLTF("../../assets/snowflakes_animation.glb");
  return (
    <>
      <primitive
        object={snowFlake.scene}
        position-y={4}
        position-z={-5}
        position-x={-6}
        scale={3}
      />
    </>
  );
}

export default SnowFlake;
