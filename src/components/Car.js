import { Environment, OrbitControls, useGLTF } from "@react-three/drei";

function Car() {
  const car = useGLTF("../../assets/abandoned_snow_carraw.glb");
  return (
    <>
      <primitive
        rotation-y={Math.PI}
        object={car.scene}
        position-y={-2}
        position-z={6.5}
        position-x={-1.5}
        scale={0.5}
      />
      <Environment preset={"night"} />
    </>
  );
}

export default Car;
