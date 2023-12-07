import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./Components/Experince";
import { useLayoutEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./Components/Header";
import WhyUs from "./Components/WhyUs";

gsap.registerPlugin(ScrollTrigger);

const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  z-index: 0;
  overflow: hidden;
`;

const SecondSection = styled.div`
  width: 100vw;
  height: 100vh;
  position: relativ;
  background-color: transparent;
  z-index: 2;
  // position: sticky;

  overflow: hidden;
`;

const ForthSection = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 1;
  position: sticky;
  background-color: transparent;

  overflow: hidden;
`;

function App() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".firstCircle", {
        width: "250vw",
        height: "250vw",

        // opacity: 0,
        duration: 5,
        delay: true,
        scrollTrigger: {
          trigger: ".second",
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
      });
      gsap.to(".firsMain", {
        opacity: 0,
        duration: 5,
        delay: true,
        scrollTrigger: {
          trigger: ".second",
          start: "top bottom",
          end: "+=150px",
          scrub: 1,
        },
      });
      gsap.to(".icon", {
        opacity: 1,
        duration: 1,
        delay: true,
        scrollTrigger: {
          trigger: ".threed",
          start: "top center",
        },
      });
    });

    return () => {
      ctx.revert();
    };
  });
  return (
    <>
      <CanvasContainer>
        <Canvas camera={{ position: [2, 1.5, 2], fov: 85 }}>
          <Experience />
        </Canvas>
      </CanvasContainer>
      <Header />
      <SecondSection className="firstGost"></SecondSection>
      <SecondSection className="second"></SecondSection>
      <WhyUs />
      <ForthSection className="fourth">
        <div className=" w-full h-full p-10 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-left">
          <div>
            <h1 className=" font-bold text-[100px] p-0 leading-none">
              WELCOME
            </h1>
            <h3 className=" font-bold text-[15px] mb-4">
              EXPLORE THE TEASER MICROVERSE IN 1 CLICK.
            </h3>
            <button className="px-3 hover:scale-110 py-1 bg-white  text-black rounded-full">
              activate
            </button>
          </div>
        </div>
      </ForthSection>
    </>
  );
}

export default App;
