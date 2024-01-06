import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className="container mx-auto 2xl">
        <div className="flex-col flex md:flex-row  mt-7">
          <Link
            href="https://www.linkedin.com/company/pixelwavemedia/about"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/pixelwavemedia_logo.jpg"
                height={150}
                width={150}
                className={"rounded-lg"}
                alt="Pixel wave"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Remote Front-End Engineer</p>
                <p className="text-gray-500 text-[10px]">
                  Developed and implemented a new responsive design framework,
                  resulting in a 25% increase in mobile traffic and a 15% increase in overall
                  user engagement.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://www.linkedin.com/company/technova-solutions-pvt-ltd/about/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/technova.png"
                height={150}
                width={150}
                alt="Nech Nova"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">TechNova Solutions</p>
                <p className="text-gray-500 text-[10px]">
                  Developed and maintained a suite of APIs and web services, resulting in a 30%
                  increase in data accuracy and a 20% reduction in data processing times
                </p>
              </div>
            </div>
          </Link>
        </div>
          <Link
            href="https://www.vergesystems.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="flex flex-row mx-auto z-[1] md:w-1/2"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/ThirdProject.png"
                height={150}
                width={150}
                alt="VergeSystems"
              />
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">
                  Verge Systems
                </p>
                <p className="text-gray-500 text-[10px]">
                  Developed the Verge Systems website using React.js.
                </p>
              </div>
            </div>
          </Link>
      </div>
    </section>
  );
};

export default Projects;
