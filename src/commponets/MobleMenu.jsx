import { useNavigate, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll'; // make sure you have react-scroll installed

export const MobleMenu = ({ menuOpen, SetMenuOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMobileClick = async (to) => {
    SetMenuOpen(false);

    if (location.pathname !== '/') {
      await navigate('/');

      setTimeout(() => {
        scroller.scrollTo(to, {
          duration: 500,
          smooth: true,
          offset: -80,
        });
      }, 100); // wait a bit after navigating home
    } else {
      scroller.scrollTo(to, {
        duration: 500,
        smooth: true,
        offset: -80,
      });
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-[rgba(10,10,10,0.8)] backdrop-blur-md z-50 flex flex-col items-center justify-center
        transition-all duration-500 ease-in-out
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
      `}
    >
      <button
        onClick={() => SetMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-4xl focus:outline-none hover:text-red-400 transition-colors"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <div className="flex flex-col space-y-8">
        {[
          { label: "Home", to: "home" },
          { label: "About", to: "about" },
          { label: "Projects", to: "projects" },
          { label: "Contact", to: "contact" },
        ].map((item, index) => (
          <button
            key={item.label}
            onClick={() => handleMobileClick(item.to)}
            className={`text-3xl font-bold text-white transition-all duration-300 ease-in-out transform
              ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
              hover:scale-110 hover:text-blue-400 hover:drop-shadow-[0_0_6px_rgba(0,191,255,0.7)]`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

  