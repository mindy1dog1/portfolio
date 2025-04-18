import { useState } from "react";
import { RevealOnScroll } from "../RevelOnScroll";

export const Projects = () => {
    const [viewpprStat, setViewpprStat] = useState(false)
    const [Viewppr, setViewppr] = useState(" View Project →")

    const eseteregg = () => {
        if (viewpprStat == false) {
            setViewpprStat(true)
            setViewppr(" It me tho! ")
            
            setTimeout(()=> {
                setViewpprStat(false)
                setViewppr("  View Project → ")
            }, 1000);
        }
    }

    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        
        <div className="max-w-5xl  mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rbga[(49, 130, 246, 0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2"> 3D affter effect into</h3>
                    <p className="text-gray-500 mb-4">I made a 3D render in After Effects for a school project on the Friday announcements and ended up getting elected because of it.</p>
                    <div>
                        {["After Effects", "Premiere Pro"].map((tech, key) => (<span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rbga[(49, 130, 246, 0.2)] transition">{tech} </span>))}

                    </div>

                    <div className="flex justify-between items-center">
                        <a href="#announcementInto" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project →</a>
                    </div>
                </div>


                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rbga[(49, 130, 246, 0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2"> Sports Photography</h3>
                    <p className="text-gray-500 mb-4">I did sports photography as a hobby and submitted my photos to the high school.</p>
                    <div>
                        {["Lightroom", "Photoshop", "Premiere Pro"].map((tech, key) => (<span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rbga[(49, 130, 246, 0.2)] transition">{tech} </span>))}

                    </div>

                    <div className="flex justify-between items-center">
                        <a href="#SportsPhotography" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project →</a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rbga[(49, 130, 246, 0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2"> This web Page</h3>
                    <p className="text-gray-500 mb-4">I initially just wanted to challenge myself with a project, but it turned into something really valuable.</p>
                    <div>
                        {["React", "TypeScript", "Tailwindcss"].map((tech, key) => (<span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rbga[(49, 130, 246, 0.2)] transition">{tech} </span>))}

                    </div>

                    <div className="flex justify-between items-center">
                         
                        <a onClick={eseteregg} className="text-blue-400 hover:text-blue-300 transition-colors my-4">{Viewppr}</a>
                    </div>
                </div>


            </div>
        </div>
        </RevealOnScroll>
    </section>;
}