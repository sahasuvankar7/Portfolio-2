"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { delay, motion, useInView } from "framer-motion";
import { Link } from "react-scroll";
// import Link from "next/link";

const projectdata = [
  {
    id: 1,
    title: "Bankist Application",
    imageUrl: "/images/project/Bankist.png",
    description:
      "Bankist is a banking application that allows users to transfer money, request a loan, and close their account.",
    githubLink: "https://github.com/sahasuvankar7/Bankist_Application",
    preview: "https://bankist-application-cr7.vercel.app/",
  },
  {
    id: 2,
    title: "E-Commerce Application",
    imageUrl: "/images/project/E-commerce.png",
    description:
      "E-Commerce is a shopping application that allows users to buy products, add products to cart, and checkout",
    githubLink: "https://github.com/Swastikdan/E-Commerce-Django",
    preview: "https://swastikpyprojects.pythonanywhere.com/",
  },
  // {
  //   id: 3,
  //   title: "Weather Application",
  //   imageUrl: "/images/project/weather-app.png",
  //   description:
  //     "Weather is an application that allows users to check the weather of any city in the world.",
  //   githubLink: "https://github.com/sahasuvankar7/Github_Users_Finder",
  //   preview: "",
  // },
  {
    id: 4,
    title: "Portfolio Application",
    imageUrl: "/images/project/portfolio.png",
    description:
      "This is my portfolio website. It is a single page application that allows users to know more about me.",
    githubLink: "https://github.com/sahasuvankar7/My_Portfolio",
    preview: "https://suvankarsaha.vercel.app/",
  },
  // {
  //   id: 5,
  //   title: "Github Finder Application",
  //   imageUrl: "/images/project/github-finder.png",
  //   description:
  //     "Github Finder is an application that allows users to search for github users and view their profile.",
  //   githubLink: "https://github.com/sahasuvankar7/Github_Users_Finder",
  //   preview: "https://i.ebayimg.com/images/g/SsYAAOSw8QdkqOAP/s-l1200.jpg",
  // },
  // {
  //   id: 6,
  //   title: "Menu Application",
  //   imageUrl: "/images/project/our-menu.png",
  //   description:
  //     "Menu is an application that allows users to search for food and drinks and view their details.",
  //   githubLink: "https://github.com/sahasuvankar7/Github_Users_Finder",
  //   preview: "https://i.ebayimg.com/images/g/SsYAAOSw8QdkqOAP/s-l1200.jpg",
  // },
];

const Project = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <section id="#projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-8">
        {projectdata.map((project, index) => (
          <motion.li
            variants={variants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            key={index}
            transition={{ duration: 0.5, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              githubLink={project.githubLink}
              preview={project.preview}
            />
          </motion.li>
        ))}
      </ul>
      <div className="text-center my-14 w-full">
        <a href="https://github.com/sahasuvankar7" target="_blank" rel="noopener noreferrer">
          <button className="px-8 py-3 rounded-full mr-4 w-2/3 md:w-2/12  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
            More
          </button>
        </a>
      </div>
    </section>
  );
};

export default Project;
