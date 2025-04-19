import { HashRouter as Router, Routes, Route } from "react-router-dom"; // 👈 changed here
import { useState, useEffect } from 'react';
import Lenis from "@studio-freight/lenis";

import { LoadingScreen } from './commponets/LoadingScreen';
import { Main } from "./commponets/Pages/Main";
import { About2 } from "./commponets/Pages/about2";
import { SportsPhotography } from "./commponets/Pages/Projects/SportsPhotography";
import { AnnouncementIntoPage } from "./commponets/Pages/Projects/announcementInto";
import { Navbar } from './commponets/Navbar';
import { MobleMenu } from './commponets/MobleMenu';

import "./index.css"; 

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const alreadyLoaded = localStorage.getItem('alreadyLoaded');
    if (alreadyLoaded) {
      setIsLoaded(true);
    } else {
      setTimeout(() => {
        setIsLoaded(true);
        localStorage.setItem('alreadyLoaded', 'true');
      }, 2000);
    }
  }, []);

  if (!isLoaded) {
    return <LoadingScreen onCompleate={() => setIsLoaded(true)} />;
  }

  return (
    <Router basename="/portfolio"> {/* basename still fine if you want! */}
      <Navbar menuOpen={menuOpen} SetMenuOpen={setMenuOpen} />
      <MobleMenu menuOpen={menuOpen} SetMenuOpen={setMenuOpen} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About2 />} /> {/* lowercase */}
        <Route path="/photography" element={<SportsPhotography />} />
        <Route path="/announcement" element={<AnnouncementIntoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
