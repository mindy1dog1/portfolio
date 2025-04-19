import React, { useCallback } from "react";
import { RevealOnScroll } from "../RevelOnScroll";
import { Link } from "react-scroll";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // THIS is important

export const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine); // Now you should see something
    await loadFull(engine); // THIS loads the particles engine fully
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false }, // VERY IMPORTANT so it doesn't break your layout
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                area: 800,
              },
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: 3,
            },
            move: {
              enable: true,
              speed: 1,
              random: true,
              out_mode: "out",
            },
            links: {
              enable: true,
              distance: 150,
              color: "#00bfff",
              opacity: 0.5,
              width: 1,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
            },
          },
        }}
        className="absolute inset-0 w-full h-full"
      />

      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight text-shadow-md">
            Hi, I'm Jonathan Elliott
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Digital media background now pivoting into cybersecurity, actively seeking internship opportunities.
          </p>

          <div className="flex justify-center space-x-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden cursor-pointer hover:-translate-y-0.5 hover:drop-shadow-[0_0_6px_rgba(0,191,255,0.7)]"
            >
              View Projects
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:bg-blue-500/10"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
