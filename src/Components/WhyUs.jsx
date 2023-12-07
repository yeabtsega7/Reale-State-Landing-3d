import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";

const WhyUs = () => {
  return (
    <div className="threed w-screen h-screen overflow-hidden bg-white sticky z-[2] py-14 ">
      <h1 className=" w-[80vw] m-auto font-bold text-[2rem]">Our Service</h1>
      <div className=" w-[80vw] m-auto grid grid-cols-3 gap-5 ">
        <div className=" w-full relative mt-10 text-center  shadow-xl  p-10 ">
          <div className=" absolute h-14 w-14 -top-7 bg-blue-500 text-white text-[2rem] left-[50%] translate-x-[-50%] rounded-full flex justify-center items-center  opacity-0 icon">
            <FaHome />
          </div>
          <h3 className=" font-bold mb-2">Property Sales</h3>
          <p className=" text-[0.8rem]">
            Assisting clients with the sale of residential, commercial, or
            industrial properties. This includes marketing, property valuation,
            pricing strategies, negotiations, and closing the sale.
          </p>
        </div>
        <div className=" w-full relative mt-10 text-center  shadow-xl  p-10 ">
          <div className=" absolute h-14 w-14 -top-7 bg-blue-500 text-white text-[2rem] left-[50%] translate-x-[-50%] rounded-full flex justify-center items-center  opacity-0 icon">
            <FaSearch />
          </div>
          <h3 className=" font-bold mb-2">Property Purchase</h3>
          <p className=" text-[0.8rem]">
            Helping clients find and acquire properties that meet their specific
            needs and requirements. This involves conducting property searches,
            arranging viewings, negotiating offers, and facilitating the
            purchase process.
          </p>
        </div>
        <div className=" w-full relative mt-10 text-center  shadow-xl  p-10 ">
          <div className=" absolute h-14 w-14 -top-7 bg-blue-500 text-white text-[2rem] left-[50%] translate-x-[-50%] rounded-full flex justify-center items-center  opacity-0 icon">
            <FaBuilding />
          </div>
          <h3 className=" font-bold mb-2">Property Management</h3>
          <p className=" text-[0.8rem]">
            Offering property management services for landlords and property
            owners. This involves managing rental properties, finding tenants,
            collecting rent, handling maintenance and repairs, and ensuring
            compliance with local regulations.
          </p>
        </div>
        <div className=" w-full relative mt-10 text-center  shadow-xl  p-10 ">
          <div className=" absolute h-14 w-14 -top-7 bg-blue-500 text-white text-[2rem] left-[50%] translate-x-[-50%] rounded-full flex justify-center items-center  opacity-0 icon">
            <FaKey />
          </div>
          <h3 className=" font-bold mb-2">Rental Services</h3>
          <p className=" text-[0.8rem]">
            Assisting clients in finding suitable rental properties. This
            includes property searches, rental applications, lease agreements,
            and tenant screening.
          </p>
        </div>
        <div className=" w-full relative mt-10 text-center  shadow-xl  p-10 ">
          <div className=" absolute h-14 w-14 -top-7 bg-blue-500 text-white text-[2rem] left-[50%] translate-x-[-50%] rounded-full flex justify-center items-center  opacity-0 icon">
            <FaChartLine />
          </div>
          <h3 className=" font-bold mb-2">Real Estate Investment</h3>
          <p className=" text-[0.8rem]">
            Providing guidance and expertise for clients interested in real
            estate investment opportunities. This can include identifying
            investment properties, analyzing potential returns, and offering
            advice on property financing and investment strategies.
          </p>
        </div>
        <div className=" w-full relative mt-10 text-center  shadow-xl  p-10 ">
          <div className=" absolute h-14 w-14 -top-7 bg-blue-500 text-white text-[2rem] left-[50%] translate-x-[-50%] rounded-full flex justify-center items-center  opacity-0 icon">
            <FaLightbulb />
          </div>
          <h3 className=" font-bold mb-2">Real Estate Consulting</h3>
          <p className=" text-[0.8rem]">
            Offering professional advice and consulting services on various real
            estate matters. This can include market analysis, feasibility
            studies, development planning, and investment advice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
