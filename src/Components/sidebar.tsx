import Image from "next/image";
import React from "react";
import { Envelope, Linkedin, Medium, Twitter } from "./icon";

const Sidebar = ({ data }:any) => {
  const { name, role, education, contactLinks } = data;
  return (
    <div className="bg-black flex flex-col h-auto sm:h-screen content-between  sm:justify-around sm:w-1/3 w-full sm:fixed ">
      
      <div className="text-white flex flex-col p-10 items-center">
        <Image
          priority
          width={300}
          height={300}
          className="rounded-full h-full mb-6"
          src="/images/ahmad.jpg"
          alt="ahmad.jpg"
          aria-label="ahmad.jpg"
        />
        <h1 className="mb-2">{name}</h1>
        <h2 className="mb-8">{role}</h2>
        <p className="mb-2">{education[0]}</p>
        <p className="mb-2">{education[1]}</p>
        </div>
        <div className="text-white text-center mb-4 mt-4 sm:mt-4">
        <h3 className="mb-2">CONTACT ME</h3> 
        <div className="flex flex-row justify-center gap-2"> 
        <a className="icons-contactme" href={contactLinks?.[0]} aria-label={"twitter link"}>
          {" "}
          <Twitter />{" "}
        </a>
        <a className="icons-contactme" href={contactLinks?.[1]} aria-label={"envelope link"}>
          {" "}
          <Envelope />{" "}
        </a>
        <a className="icons-contactme" href={contactLinks?.[2]} aria-label={"linkdin link"}>
          {" "}
          <Linkedin />{" "}
        </a>
        <a className="icons-contactme" href={contactLinks?.[3]} aria-label={"medium link"}>
          {" "}
          <Medium />{" "}
        </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
