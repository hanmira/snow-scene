import { useGLTF } from "@react-three/drei";

function Bench() {
  const bench = useGLTF("../../assets/bench_covered_in_snow.glb");
  return (
    <>
      <primitive
        rotation-z={Math.PI / 25}
        rotation-y={Math.PI / 2}
        object={bench.scene}
        position-x={8}
        position-y={0.1}
        position-z={0}
        scale={7}
      />
    </>
  );
}

export default Bench;
