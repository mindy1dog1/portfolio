import { useState } from "react";
import { RevealOnScroll } from "../RevelOnScroll";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import confetti from "canvas-confetti";
import { Link } from "react-router-dom";


export const Projects = () => {
    const [viewpprStat, setViewpprStat] = useState(false);
    const [Viewppr, setViewppr] = useState(" View Project →");
  
    const eseteregg = () => {
      if (!viewpprStat) {
        setViewpprStat(true);
        setViewppr(" It me tho! ");
        
        // 🎉 Crazy Confetti Explosion - Random bursts across the screen!
        for (let i = 0; i < 5; i++) {
          setTimeout(() => {
            confetti({
              particleCount: 25,
              spread: 360,
              origin: {
                x: Math.random(), // Random X
                y: Math.random() - 0.2 // Random Y, slightly higher origin
              }
            });
          }, i * 200); // Delay between each burst
        }
  
        setTimeout(() => {
          setViewpprStat(false);
          setViewppr(" View Project → ");
        }, 1500); // Adjust time so confetti lasts for a moment
      }
    };
  

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          
          {/* TYPEWRITER TITLE */}
          <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-white bg-clip-text text-transparent text-center">
            <Typewriter
              words={['Featured Projects', 'Cool Stuff I Built', 'Fun Side Quests ✨']}
              loop={false}
              cursor
              cursorStyle={
                <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-fast"> |</span>
              }
              
              typeSpeed={60}
              deleteSpeed={60}
              delaySpeed={2000}
            />
          </h2>

          {/* your motion cards remain here... */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Project 1 */}
                        <motion.div
                            className="p-6 rounded-xl border border-white/10"
                            whileHover={{
                                scale: 1.05, // Slightly scale the card
                                rotateZ: -1, // Tiny rotation
                                y: -10, // Move up
                                boxShadow: "0 20px 30px rgba(59,130,246,0.2)", // Shadow
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-xl font-bold mb-2">3D After Effect Intro</h3>
                            <p className="text-gray-500 mb-4">
                                I made a 3D render in After Effects for a school project on the Friday announcements and ended up getting elected because of it.
                            </p>
                            <div>
                                {["After Effects", "Premiere Pro"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rbga[(49, 130, 246, 0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                            <Link to="/announcement" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project →
                            </Link>

                            </div>
                        </motion.div>

                        {/* Project 2 */}
                        <motion.div
                            className="p-6 rounded-xl border border-white/10"
                            whileHover={{
                                scale: 1.05, // Slightly scale the card
                                rotateZ: -1, // Tiny rotation
                                y: -10, // Move up
                                boxShadow: "0 20px 30px rgba(59,130,246,0.2)", // Shadow
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-xl font-bold mb-2">Sports Photography</h3>
                            <p className="text-gray-500 mb-4">
                                I did sports photography as a hobby and submitted my photos to the high school.
                            </p>
                            <div>
                                {["Lightroom", "Photoshop", "Premiere Pro"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rbga[(49, 130, 246, 0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <Link to="/photography" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    View Project →
                                </Link>
                            </div>
                        </motion.div>

                        {/* Project 3 */}
                        <motion.div
                            className="p-6 rounded-xl border border-white/10"
                            whileHover={{
                                scale: 1.05, // Slightly scale the card
                                rotateZ: -1, // Tiny rotation
                                y: -10, // Move up
                                boxShadow: "0 20px 30px rgba(59,130,246,0.2)", // Shadow
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-xl font-bold mb-2">This Web Page</h3>
                            <p className="text-gray-500 mb-4">
                                I initially just wanted to challenge myself with a project, but it turned into something really valuable.
                            </p>
                            <div>
                                {["React", "TypeScript", "Tailwindcss"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rbga[(49, 130, 246, 0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a onClick={eseteregg} className="text-blue-400 hover:text-blue-300 transition-colors my-4">{Viewppr}</a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};