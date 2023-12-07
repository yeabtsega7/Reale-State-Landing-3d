import styled from "styled-components";

import { FaHome } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const FirstSection = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0vw;
  background-color: transparent;
  overflow: hidden;
`;

const FirstSectionCircle = styled.div`
  width: 85vw;
  height: 85vw;
  position: absolute;
  top: 0%;
  right: 50%;
  transform: translate(70%, -50%);
  background-color: transparent;
  box-shadow: 0px 0px 0px 1000px white;
  border-radius: 50%;
`;
const FirstSectionMainContaner = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  top: 0%;
  overflow: hidden;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;
const Header = () => {
  return (
    <FirstSection className="first">
      <FirstSectionCircle className="firstCircle"></FirstSectionCircle>
      <FirstSectionMainContaner className="firsMain">
        <div className="  w-[100%] h-[5rem] text-[3rem] flex items-center px-10 ">
          <FaHome />
          Logo
        </div>
        <div className=" w-[28vw] mt-[15rem] ml-10 font-bold text-[2.5rem]  font-serif  ">
          Easy way to find your dream home
        </div>
        <div className="  flex gap-16 ml-10 mt-16">
          <div className="w-[3rem]  text-center">
            <div className=" text-blue-700 text-[1.5rem] font-bold">2000</div>
            <div className=" text-gray-500 font-[1rem]">awward winning</div>
          </div>
          <div className="w-[3rem]  text-center">
            <div className=" text-blue-700 text-[1.5rem] font-bold">5000+</div>
            <div className=" text-gray-500 font-[1rem]">Happy Costumer</div>
          </div>
          <div className="w-[3rem]  text-center">
            <div className=" text-blue-700 text-[1.5rem] font-bold">2000</div>
            <div className=" text-gray-500 font-[1rem]">Property Ready</div>
          </div>
          <div className=" absolute mr-2 p-2 rounded-l-xl text-blue-500 bg-gray-200 gap-4 text-[2rem]  top-[30vh] right-0 flex flex-col items-center">
            <FaFacebook />
            <FaInstagram />
            <FaTelegram />
            <FaYoutube />
          </div>
        </div>
      </FirstSectionMainContaner>
    </FirstSection>
  );
};

export default Header;
