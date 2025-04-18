import { RevealOnScroll } from "../RevelOnScroll";

export const Projects = () => {

    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        
        <div className="max-w-5xl  mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rbga[(49, 130, 246, 0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2"> yappatron</h3>
                    <p className="text-gray-500 mb-4">about the Project so much that i can be a yappatron over heare LOL</p>
                    <div>
                        {["Premiere Pro", "After Effects"].map((tech, key) => (<span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rbga[(49, 130, 246, 0.2)] transition">{tech} </span>))}

                    </div>

                    <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project →</a>
                    </div>
                </div>


                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rbga[(49, 130, 246, 0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2"> I'm for school</h3>
                    <p className="text-gray-500 mb-4">I'm a shorter one btw</p>
                    <div>
                        {["React", "TypeScript", "photoshop"].map((tech, key) => (<span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rbga[(49, 130, 246, 0.2)] transition">{tech} </span>))}

                    </div>

                    <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project →</a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rbga[(49, 130, 246, 0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2"> I'm just bad</h3>
                    <p className="text-gray-500 mb-4">So Why are you reading me?</p>
                    <div>
                        {["Premiere Pro", "Photoshop", "node.js"].map((tech, key) => (<span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rbga[(49, 130, 246, 0.2)] transition">{tech} </span>))}

                    </div>

                    <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project →</a>
                    </div>
                </div>


            </div>
        </div>
        </RevealOnScroll>
    </section>;
}