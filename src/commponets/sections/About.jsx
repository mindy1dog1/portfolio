import { RevealOnScroll } from "../RevelOnScroll";

export const About = () => {

    const SkillOne = ["Premiere Pro", "After Effects", "Photoshop"];
    const skillTwo = ["React", "TypeScript", "Tailwindcss", "JavaScript", "python", "node.js"];
   

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 ">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center  ">
                About Me
            </h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1  transition-all">
                <p className="text-gray-300 mb-6 ">
                Passionate computer media and developer, building fun projects across the board and creating innovative solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1  transition-all">
                        <h3 className="text-xl font-bold mb-4"> Skill One </h3>
                        <div className="flex flex-wrap gap-2">{SkillOne.map((tech, key) => (<span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rbga[(49, 130, 246, 0.2)] transition">{tech} </span>))}</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1  transition-all">
                        <h3 className="text-xl font-bold mb-4"> Skill Two </h3>
                        <div className="flex flex-wrap gap-2">{skillTwo.map((tech, key) => (<span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rbga[(49, 130, 246, 0.2)] transition">{tech} </span>))}</div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 mb:grid-cols-2 gap-6 mt-8">
                <div className="p-6  rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">🏫 Education </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong> Degree one </strong> xyz University (2026-2028)
                        </li>
                        <li>
                            <strong> Drelevent Coursework:</strong> Item one, item two, item three
                        </li>
                    </ul>
                </div>

                <div className="p-6  rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">💼 Work Experience </h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4> Job area at ABC corp (2025- Present)</h4>
                            <p>Worked on ABX for XYZ applications</p>

                            <h4> Intern at DEF corp (2020)</h4>
                            <p>Worked on ABX for XYZ applications</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>;
}