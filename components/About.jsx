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
An aspiring Product Manager with a strong background in product design and strategy. My experience includes roles as a Software Engineer, Research Intern, and Associate Product Manager, giving me a comprehensive view of product development from wireframing to deployment to client/customer interaction. I focus on creating user-friendly and visually appealing products. My data science background has made me adept with data analytics, allowing me to make informed, data-driven decisions. I am eager to take on new challenges and contribute to innovative solutions.
            <p className="py-2 text-gray-600">
                Let's Connect! -<br />
                ashushimpi0211@gmail.com<br />
                +1-9196385990
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
