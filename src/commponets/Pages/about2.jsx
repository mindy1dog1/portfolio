export const About2 = ({aboutOpen, SetAboutOpen}) => {

    return <div id="about2" className= {`fixed top-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out

        ${
            aboutOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }` }>


        <button onClick={() => SetAboutOpen(false)} className=" absolute top-6 right-6 text-white text-3xl focus:outline-none pointer-coarse:" aria-label="Close About">
            &times;
        </button>

        <div className="px-4 w-150">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center "> Geting deeper </h2>
        </div>


    </div>;
}