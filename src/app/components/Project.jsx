import React from "react";
import ProjectCard from "./ProjectCard";

const projectdata = [
  {
    id: 1,
    title: "Bankist Application",
    imageUrl: "/images/project/Bankist.png",
    description:
      "Bankist is a banking application that allows users to transfer money, request a loan, and close their account.",
  },
  {
    id: 2,
    title: "E-Commerce Application",
    imageUrl: "/images/project/E-commerce.png",
    description:
      "E-Commerce is a shopping application that allows users to buy products, add products to cart, and checkout",
  },
  {
    id: 3,
    title: "Weather Application",
    imageUrl: "/images/project/weather-app.png",
    description:
      "Weather is an application that allows users to check the weather of any city in the world.",
  },
  {
    id: 4,
    title: "Portfolio Application",
    imageUrl: "/images/project/portfolio.png",
    description:
      "This is my portfolio website. It is a single page application that allows users to know more about me.",
  },
  {
    id: 5,
    title: "Github Finder Application",
    imageUrl: "/images/project/github-finder.png",
    description:
      "Github Finder is an application that allows users to search for github users and view their profile.",
  },
  {
    id: 6,
    title: "Menu Application",
    imageUrl: "/images/project/our-menu.png",
    description:
      "Menu is an application that allows users to search for food and drinks and view their details.",
  },
];

const Project = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-8">
        {projectdata.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
