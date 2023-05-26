import { useGLTF } from "@react-three/drei";

function StreetLight() {
  const light = useGLTF("../../assets/standart_street_lamp.glb");
  return (
    <>
      <primitive
        object={light.scene}
        position-y={0}
        position-z={7.5}
        position-x={1.5}
        scale={0.9}
      />
    </>
  );
}

export default StreetLight;
