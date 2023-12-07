import { OrbitControls, Stage } from "@react-three/drei";
import HomeModel from "./Home";

const Experience = () => {
  return (
    <mesh>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={4} />
      {/* <directionalLight position={[10, 10, 5]} intensity={5} /> */}
      <Stage environment={"city"} intensity={1}>
        <HomeModel />
      </Stage>
    </mesh>
  );
};

export default Experience;
