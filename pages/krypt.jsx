import Image from "next/image";
import React from "react";
import kryptImg from "../public/assets/Project/krypt.png";
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
          src={kryptImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Krypt</h2>
          <h3>React JS / Tailwind / Solidity</h3>
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
            <span className="font-bold">🎯Krypt</span>
            <br />
            <br />
            🎯It's hosted on Netlify. <br />
            🎯It's a Crypto Wallet- An individual can make secure transactions using the app. All he/she needs is address
            of the receiver and a personal metamask account. <br />
            🎯It's a Decentralized App(DApp) - The wallet is not controlled by any
            particular organization or government. It is transaparent, secure
            and reliable. <br />
            🎯Krypt is completely responsive and is built using
            React libraby of JS. <br /> 
            🎯It transfers Ethereum (test/real time) over
            other addresses anywhere in the world. <br />
            📌Solidity - Solidity language is used to write Smart
            Contracts which are later deployed on the different blockchain
            networks.(here i've used Goerli Test Network over Alchemy platform). <br />
            📌Styling - Tailwind-css. Responsive on different devices. <br />
            📌I used Remix IDE to create my ContractABI and ContractAdress - Remix IDE really makes Smart-Contract deployment over Blockchain
            hassle-free and quick.  <br />
            📌API - <span className="font-semibold">Giphy Developers</span> API to produce the Gif. 🚀 <br />
            <br />
            <span className="py-2 font-semibold">Additional features - </span>
            📍After a successful transfer of crypto is made it will render the
            transaction details at the bottom of the page along with a Gif
            related to the message you passed. <br />
            📌Requirements - you must have a metamask account to make any transactions and see the later process.😐  <br />
          </p>
          <a
            href="https://github.com/Ashuu02/Krypt"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 shadow-md shadow-gray-500">
              Code
            </button>
          </a>
          <a
            href="https://lustrous-banoffee-1bd2a5.netlify.app/"
            target="_blank"
            rel="noreferrer"
            // className="text-center justify-center flex items-center"
          >
            <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 shadow-md shadow-gray-500">
              Demo
            </button>
          </a>
          <a href="https://drive.google.com/file/d/17MXrTKNDxMjg3eUZTOGqJGyhMN4sH8Wg/view" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4 hover:scale-105 shadow-md shadow-gray-500">
              Metamask-Transaction Snaps
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
                ReactJs
              </p>
              <p className="text-gray-600 font-semibold py-2 flex justify-center items-center">
                Tailwind-css
              </p>
              <p className="text-gray-600 font-semibold py-2 flex justify-center items-center">
                Javascript
              </p>
              <p className="text-gray-600 font-semibold py-2 flex justify-center items-center">
                Solidity
              </p>
              <p className="text-gray-600 font-semibold py-2 flex justify-center items-center">
                Remix IDE
              </p>
              <p className="text-gray-600 font-semibold py-2 flex justify-center items-center">
                Giphy API
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
