"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="" id="#">
      <div className="grid grid-cols-1 sm:grid-cols-12 md:pb-20 min-h-screen md:ml-14 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Suvankar",
                1000,
                "Front-End Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Problem Solver",
                1000,
                "Quick Learner",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ABD7BE] mb-6 text-base sm:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In odio
            eius veniam, quibusdam nisi cum hic debitis sed rerum sunt, commodi,
            voluptatum porro nam aut repellendus. Fuga provident impedit
            delectus!
          </p>
          <div>
            <button className="px-6 py-3 rounded-full mr-4 w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 rounded-full mr-4 bg-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 w-full sm:w-fit mt-3 ">
              <span className="block bg-[#121212] rounded-full hover:bg-slate-800 px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-10 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] relative md:mb-10">
            <Image
              src="/images/newHeroImg.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={230}
              height={230}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
