import Image from "next/image";
import React from "react";
import netflixImg from "../public/assets/Project/netflix-clone.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const netflix = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[70vh] relative">
        <div className="absolute top-0 left-0 w-full h-[70vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={netflixImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Netflix App</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            I built this application in React JS and is hosted on Vercel. This
            app features user authentication with firebase as well as the
            firestore cloud storage database. This application is pulling movie
            data from an the IMDB movie API and displaying different categories.
            It features horizontal sliding and a featured selection. The
            useContext hook is also being implemented for app-wide state
            management. I've used Tailwind-Css for styling the entire project.
          </p>
          <a
            href="https://github.com/Ashuu02/Netflix-clone"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 shadow-md shadow-gray-500">Code</button>
          </a>
          <a
            href="netflixashu.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 hover:scale-105 shadow-md shadow-gray-500">Demo</button>
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
                React
              </p>
              <p className="text-gray-600 font-semibold py-2 flex justify-center items-center">
                Tailwind-css
              </p>
              <p className="text-gray-600 font-semibold py-2 flex justify-center items-center">
                Javascript
              </p>
              <p className="text-gray-600 font-semibold py-2 flex justify-center items-center">
                Firebase
              </p>
              <p className="text-gray-600 font-semibold py-2 flex justify-center items-center">
                IMDB API
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

export default netflix;
