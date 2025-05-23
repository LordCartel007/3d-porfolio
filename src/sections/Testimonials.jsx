import React from "react";
import TitleHeader from "../components/TitleHeader";
import { testimonials } from "../constants/index.js";
import GlowCard from "../components/GlowCard.jsx";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me? "
          sub="⭐ Client Feedback Highlights"
        />

        <div
          className="lg:columns-3 md:columns-2 columns-1
        mt-16 "
        >
          {/* destructuring*/}
          {testimonials.map(({ imgPath, name, mentions, review }) => (
            //passing props to the GlowCard component
            <GlowCard card={{ review }}>
              <div className="flex items-center gap-3">
                <div className="testimonial-div">
                  <img className="testimonial-image" src={imgPath} alt={name} />
                </div>
                <div>
                  <p className="font-bold">{name}</p>
                  <p className="text-white-50">{mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
