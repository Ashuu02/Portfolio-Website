import React from "react";
import about from "../public/assets/about.jpg";
import Image from 'next/image';
import Link from "next/link";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16 ">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2>Who I Am</h2>
          <p> I am not your normal developer. </p>
          <p> I love to design and build.🎉</p>
          <p>
            I am a Dedicated and detail-oriented Web-dev learner. I like to
            paint watch movies, Binge OTT platforms and do some leetcoding once
            in a while. I am experienced in Vanilla-JS, TailwindCss, ReactJs and
            trying NextJs, blockchain development simultaneosly. I have a
            special interest in achieving the millennial market.
            <p>
              Fascinated with how our code is rendered before our eyes,{" "}
              <span className="font-bold">Front-end development</span> really
              fascinates me. Currently I am spending time with React, Firebase
              and learning new technologies along the way..😁
            </p>
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={about} alt="about" className='rounded-xl'/>
        </div>
      </div>
    </div>
  );
};

export default About;
