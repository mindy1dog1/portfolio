

export const MobleMenu = ({ menuOpen, SetMenuOpen}) => {

    return (
        <div className= {`fixed top-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
                            transition-all duration-300 ease-in-out

                            ${
                                menuOpen
                                ? "h-screen opacity-100 pointer-events-auto"
                                : "h-0 opacity-0 pointer-events-none"
                            }
            
            
            
            ` }>

                            <button onClick={() => SetMenuOpen(false)} className=" absolute top-6 right-6 text-white text-3xl focus:outline-none pointer-coarse:" aria-label="Close Menue">
                                &times;
                            </button>

                        <a href="#home" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100  translate-y-0 " : "opacity-0  translate-y-5"}`} onClick={() => SetMenuOpen(false)}> Home </a>
                        <a href="#about" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100  translate-y-0 " : "opacity-0  translate-y-5"}`} onClick={() => SetMenuOpen(false)}> About </a>
                        <a href="#projects" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100  translate-y-0 " : "opacity-0  translate-y-5"}`} onClick={() => SetMenuOpen(false)}> Projects </a>
                        <a href="#contact" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100  translate-y-0 " : "opacity-0  translate-y-5"}`} onClick={() => SetMenuOpen(false)}> Contact </a>

            </div>
    )
}