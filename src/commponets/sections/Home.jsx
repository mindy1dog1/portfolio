import { RevealOnScroll } from "../RevelOnScroll";
import { Link } from "react-scroll"; // ✅ Import Link

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <RevealOnScroll>
        <div>
          <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight 
                text-shadow-md">
              Hi, I'm Jonathan Elliott
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
              Digital media background now pivoting into cybersecurity, actively seeking internship opportunities.
            </p>

            <div className="flex justify-center space-x-4">
              <Link
                to="projects" // 👈 id of the section you want to scroll to
                smooth={true}
                duration={500}
                offset={-80} // Adjust based on your sticky navbar height
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden cursor-pointer hover:-translate-y-0.5 hover:drop-shadow-[0_0_6px_rgba(0,191,255,0.7)]"
              >
                View Projects
              </Link>

              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium 
                  transition-all duration-300 ease-in-out cursor-pointer
                  hover:-translate-y-1 
                  hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] 
                  hover:bg-blue-500/10"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
