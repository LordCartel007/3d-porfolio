import React from "react";
import TitleHeader from "../components/TitleHeader";
import TechIcon from "../components/Models/TechLogos/TechIcon";
import { techStackIcons } from "../constants/index.js";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { techStackImgs } from "../constants/index.js";

//making them load one by one reducing the load time and make page faster
const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="The Skills I Bring to the Table"
        />

        <div className="tech-grid">
          {/* Loop through the techStackIcons array and create a component for each item.
              The key is set to the name of the tech stack icon, and the classnames are set to
              card-border, tech-card, overflow-hidden, and group. The xl:rounded-full and rounded-lg
              classes are only applied on larger screens. */}
          {techStackIcons.map((icon) => (
            <div
              key={icon.name}
              className="card-border tech-card
            overflow-hidden group xl:rounded-full rounded-lg"
            >
              {/* The tech-card-animated-bg div is used to create a background animation when the
                component is hovered. */}
              <div className="" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIcon model={icon} />
                </div>

                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
          {/* 
          {techStackImgs.map((icon) => (
            <div
              key={icon.name}
              className="card-border tech-card
           overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img src={icon.imgPath} />
                </div>

                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
