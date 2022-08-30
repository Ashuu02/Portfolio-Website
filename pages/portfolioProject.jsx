import Image from "next/image";
import React from "react";
import portfolioPic from "../public/assets/Project/portfolioPic2.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const krypt = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[70vh] relative">
        <div className="absolute top-0 left-0 w-full h-[70vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={portfolioPic}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Portfolio Website</h2>
          <h3>React JS / NextJs / Tailwind </h3>
        </div>
      </div>

      <div className="max-w-[90%] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="text-xl tracking-widest font-bold uppercase text-[#5651e5]">
            Project
          </p>
          <h2>Overview</h2>
          <br />
          <p>
            <span className="font-bold">Portfolio-website</span>
            <br />
            <br />
            📍Framework used - NextJs and ReactJs.<br/>
            📍Styling - TailwindCss. The project also features smooth scrolling.<br />
            📍Messages that the user sends are recieved using getForm.io <br />
            📍Hosted over - Vercel<br /><br />

            <span className="py-2 font-semibold">Additional features - </span><br />
            📌Cool feature is - The resume will be rendered on the screen using IPFS😉 <br />
            📌Amazing sliding and scrolling effects. <br />
            📌I've used lazy loading for client side rendering. <br />  <br />
          </p>
          <a
            href="https://github.com/Ashuu02/Portfolio-Website
            "
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 shadow-md shadow-gray-500">
              Code
            </button>
          </a>
          <a
            href="https://ashutosh-shimpi.vercel.app/"
            target="_blank"
            rel="noreferrer"
            // className="text-center justify-center flex items-center"
          >
            <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 shadow-md shadow-gray-500">
              Demo
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 underline">Technologies</p>
            <div className="flex items-center justify-center my-4 ">
              <div className="p-1">
                <RiRadioButtonFill className="ml-3 m-1" />
              </div>
              <div className="p-1">
                <RiRadioButtonFill className="m-1" />
              </div>
              <div className="p-1">
                <RiRadioButtonFill className="m-1" />
              </div>
              <div className="p-1">
                <RiRadioButtonFill className="m-1" />
              </div>
              <div className="p-1">
                <RiRadioButtonFill className="m-1" />
              </div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-1">
            <p className="text-gray-600 font-semibold py-2 flex justify-center items-center">
                NextJs
              </p>
              <p className="text-gray-600 font-semibold py-2 flex justify-center items-center">
                ReactJs
              </p>
              <p className="text-gray-600 font-semibold py-2 flex justify-center items-center">
                Tailwind-css
              </p>
              <p className="text-gray-600 font-semibold py-2 flex justify-center items-center">
                Javascript
              </p>
              <p className="text-gray-600 font-semibold py-2 flex justify-center items-center">
                IPFS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default krypt;
