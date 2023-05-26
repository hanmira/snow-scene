import { Canvas } from "@react-three/fiber";
import House from "./components/House";
import { Environment, Loader, PerspectiveCamera } from "@react-three/drei";
import Ground from "./components/Ground";
import Snowman from "./components/Snowman";
import SnowWood from "./components/SnowWood";
import Showel from "./components/Showel";
import Car from "./components/Car";
import Bench from "./components/Bench";
import SnowFlake from "./components/SnowFlake";
import Loader2 from "./components/Loader2";
import { Suspense } from "react";
import StreetLight from "./components/StreetLight";
import { ARButton, XR } from "@react-three/xr";

function App() {
  return (
    <div className="App">
      <ARButton />
      <Canvas
        camera={{ position: [9, 2, 7] }}
        style={{
          backgroundImage:
            'url("https://t4.ftcdn.net/jpg/04/90/57/77/360_F_490577775_FJWG0sGo0OLoeBEcAIP4KSYjx1ofQ9o9.jpg")',
        }}
      >
        <XR>
          <fog attach="fog" args={["#000", 30, 40]} />
          <pointLight position={[3, 10, -3]} intensity={2.5} color="#000" />
          {/* <PerspectiveCamera position={[9, 2, 7]} makeDefault /> */}
          <Suspense fallback={<Loader2 />}>
            <SnowFlake />
            <House />
            <Ground />
            <SnowWood x={6} y={-0.5} z={-1} />
            <Car />
            <Bench />
            <Snowman />
            <Showel />
            <StreetLight />
            <Environment preset="forest" />
          </Suspense>
        </XR>
      </Canvas>
    </div>
  );
}

export default App;
