import { useEffect } from "react";
import { Link as RouterLink } from 'react-router-dom';  // Importing React Router's Link
import { Link as ScrollLink, scroller } from 'react-scroll';  // Importing react-scroll's Link
import { useNavigate, useLocation } from 'react-router-dom';

// The ScrollTo component, where we handle smooth scrolling to sections.
export const ScrollTo = ({ to, children, ...props }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = async () => {
    if (location.pathname !== '/') {
      // Go to home first if we're not already there
      await navigate('/');
      setTimeout(() => {
        scroller.scrollTo(to, {
          duration: 500,
          smooth: true,
          offset: -80,
        });
      }, 100); // 100ms delay to ensure the route is loaded
    } else {
      // Already on home page, just scroll to the target
      scroller.scrollTo(to, {
        duration: 500,
        smooth: true,
        offset: -80,
      });
    }
  };

  return (
    <div onClick={handleClick} className={props.className}>
      {children}
    </div>
  );
};

// The Navbar component
export const Navbar = ({ menuOpen, SetMenuOpen }) => {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  });

  return (
    <nav className="fixed top-0 w-full z-100 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Using React Router's Link for navigating to the home page */}
          <RouterLink to="/" className="font-mono text-xl font-bold text-white">
            Jon<span className="text-blue-500 hover:scale-110 hover:text-blue-400 hover:drop-shadow-[0_0_6px_rgba(0,191,255,0.7)]">.ellio</span>
          </RouterLink>

          <div className="w-7 h-5 relative cursor-pointer z-50 md:hidden" onClick={() => SetMenuOpen((prev) => !prev)}>
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {/* Using ScrollTo for smooth scrolling */}
            <ScrollTo to="home" className="text-gray-300 hover:scale-110 hover:text-blue-400 hover:drop-shadow-[0_0_6px_rgba(0,191,255,0.7)] transition-colors cursor-pointer">
              Home
            </ScrollTo>

            <ScrollTo to="about" className="text-gray-300 hover:scale-110 hover:text-blue-400 hover:drop-shadow-[0_0_6px_rgba(0,191,255,0.7)] transition-colors cursor-pointer">
              About
            </ScrollTo>

            <ScrollTo to="projects" className="text-gray-300 hover:scale-110 hover:text-blue-400 hover:drop-shadow-[0_0_6px_rgba(0,191,255,0.7)] transition-colors cursor-pointer">
              Projects
            </ScrollTo>

            <ScrollTo to="contact" className="text-gray-300 hover:scale-110 hover:text-blue-400 hover:drop-shadow-[0_0_6px_rgba(0,191,255,0.7)] transition-colors cursor-pointer">
              Contact
            </ScrollTo>
          </div>
        </div>
      </div>
    </nav>
  );
};