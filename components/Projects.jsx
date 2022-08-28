import React from "react";
import Image from "next/image";
import netflix from "../public/assets/Project/netflix-clone.png";
import Link from "next/link";
import Projectitem from "./Projectitem";
import krypt from "../public/assets/Project/krypt.png"
import expenseTracker from "../public/assets/Project/expense-tracker.png"

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[90%] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Projectitem
            title={"Netflix-Clone"}
            backgroundImg={netflix}
            projectUrl="/netflixClone"
          />
          <Projectitem
            title={"Crypto Wallet"}
            backgroundImg={krypt}
            projectUrl="/krypt"
          />
          <Projectitem
            title={"Expense-tracker"}
            backgroundImg={expenseTracker}
            projectUrl="/expenseTracker"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
