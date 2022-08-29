import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/profile-pic.png";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[90%] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 font-meduium">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            {" "}
            I am not your normal developer.{" "}
          </p>
          <p className="py-2 text-gray-600"> I love to design and build.🎉</p>
          <p className="py-2 text-gray-600">
            I am a Dedicated and detail-oriented Web-dev learner. I like to
            paint watch movies, Binge OTT platforms and do some leetcoding once
            in a while. I am experienced in <span className="font-semibold">C++, Vanilla-JS, TailwindCss, ReactJs and
            trying NextJs, Blockchain development</span>  simultaneosly. I have a
            special interest in achieving the millennial market.
            <p className="py-2 text-gray-600">
              Fascinated with how our code is rendered before our eyes,{" "}
              <span className="font-bold">Front-end development</span> really
              fascinates me. Currently I am spending time with <span className="font-semibold">React, Firebase</span> and learning new technologies along the way..😁
            </p>
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
