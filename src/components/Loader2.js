import { Html, useProgress } from "@react-three/drei";

function Loader2() {
  const { progress } = useProgress();
  return <Html style={{ color: "white" }}>{Math.floor(progress)}% loaded</Html>;
}

export default Loader2;
