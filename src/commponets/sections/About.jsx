import { RevealOnScroll } from "../RevelOnScroll";
import { useEffect } from "react"

export const About = ({aboutOpen, SetAboutOpen}) => {

    useEffect(() => {
            document.body.style.overflow = aboutOpen ? "hidden" : ""
        })
    

    const Adobe = ["Premiere Pro", "After Effects", "Photoshop 📃", "illustrator"];
    const Coding = ["React", "TypeScript", "Tailwindcss", "JavaScript", "python"];
   

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 ">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center  ">
                About Me
            </h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1  transition-all">
                <p className="text-gray-300 mb-6 ">
                I have a background in digital media, with experience using Adobe Creative Suite and some familiarity with coding. While I’ve learned a lot in the creative field, I’m now shifting my focus toward cybersecurity. I’m currently building my skills and aiming to gain hands-on experience through an internship in the cybersecurity industry.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1  transition-all">
                        <h3 className="text-xl font-bold mb-4"> Adobe Creative Cloud Suite </h3>
                        <div className="flex flex-wrap gap-2">{Adobe.map((tech, key) => (<span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rbga[(49, 130, 246, 0.2)] transition">{tech} </span>))}</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1  transition-all">
                        <h3 className="text-xl font-bold mb-4"> Coding </h3>
                        <div className="flex flex-wrap gap-2">{Coding.map((tech, key) => (<span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rbga[(49, 130, 246, 0.2)] transition">{tech} </span>))}</div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 mb:grid-cols-2 gap-6 mt-8">
                <div className="p-6  rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"><span className="bg-white bg-clip-text text-transparent">🍎</span> Education </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong> Cybersecurity </strong> Moraine Park Technical College (2025-Present)
                        </li>
                        <li>
                            <strong> Cybersecurity Coursework:</strong> To Be Seen
                        </li>
                    </ul>
                </div>

                <div className="p-6  rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"><span className="bg-white bg-clip-text text-transparent">💼</span> Work Experience </h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4> None (Present)</h4>
                            <p> idk soon tho</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center space-x-4">
                    <a onClick={() => SetAboutOpen((prev) => !prev)} className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
                         Dig deep
                    </a>

                    
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>;
}