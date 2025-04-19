import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

  // ...your existing Router and content

  useEffect(() => {
    // Only run once when app first mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000); // fake 2s load time or however long you want

    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    // Only show LoadingScreen at first
    return <LoadingScreen onCompleate={() => setIsLoaded(true)} />;

    
  }

  return (
    <Router basename="/portfolio">
      <Navbar menuOpen={menuOpen} SetMenuOpen={setMenuOpen} />
      <MobleMenu menuOpen={menuOpen} SetMenuOpen={setMenuOpen} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/About" element={<About2 />} />
        <Route path="/photography" element={<SportsPhotography />} />
        <Route path="/announcement" element={<AnnouncementIntoPage />} />
      </Routes>
    </Router>
  );
}

export default App;