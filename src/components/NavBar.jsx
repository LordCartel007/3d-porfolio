import React, { use } from "react";
import { navLinks } from "../constants/index.js";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  //checking if user have scroll 10px
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(true);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a className="logo" href="#hero">
          Casey Daniel
        </a>
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}

            <a href="https://all-projects.caseydaniel.online/" className="">
              <div className="inner">
                <span className="">All Projects</span>
              </div>
            </a>

            <a href="https://github.com/LordCartel007" className="">
              <div className="inner">
                <span>GitHub Profile</span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/casey-daniel-33b771341/"
              className=""
            >
              <div className="inner">
                <span>LinkedIn Profile</span>
              </div>
            </a>
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
