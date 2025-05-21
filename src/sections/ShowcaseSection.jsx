import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  // applying gsap animation
  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,

          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <>
      <section id="work" ref={sectionRef} className="app-showcase">
        <div className="w-full">
          <h1 className="clicktoview text-center text-white-50 md:text-xl mb-3 ">
            Click Each Project To View
          </h1>
          <div className="showcaselayout">
            {/* Left: Showcase layout */}
            <div className="first-project-wrapper" ref={project1Ref}>
              <a href="https://all-projects.caseydaniel.online/eachmovie/1">
                <div className="image-wrapper">
                  <img src="/images/auto-cartel.png" alt="autocartel" />
                </div>
                <div className="text-content">
                  <h2>Auto Cartel</h2>
                  <p className="text-white-50 md:text-xl">
                    An ecommerce car store with messaging and payment system
                    built for a car importing company
                  </p>
                </div>
              </a>
            </div>

            {/* Right: Showcase layout */}
            <div className="project-list-wrapper overflow-hidden">
              <a href="https://all-projects.caseydaniel.online/eachmovie/3">
                <div className="project" ref={project2Ref}>
                  <div className="image-wrapper bg-[#ffefdb]">
                    <img src="/images/nikky-fashion.png" alt="NikkyFashion " />
                  </div>
                  <h2>Nikky Fashion Store (start up)</h2>
                </div>
              </a>
              <div className="project" ref={project3Ref}>
                <a href="https://all-projects.caseydaniel.online/eachmovie/5">
                  <div className="image-wrapper bg-[#ffe7eb]">
                    <img src="/images/ai-cartel.png" alt="ai cartel" />
                  </div>
                  <h2>Cartel AI (Startup)</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <a href="https://all-projects.caseydaniel.online/" className="">
        <div className="allprojects">
          <span>View All Projects</span>
        </div>
      </a>
    </>
  );
};

export default ShowcaseSection;
