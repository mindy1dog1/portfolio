import { useState } from 'react';

import { LoadingScreen } from '../LoadingScreen';
import { Navbar } from '../Navbar';
import { MobleMenu } from '../MobleMenu';
import { Home } from "../sections/Home"
import { About } from "../sections/About"
import { Projects } from "../sections/Projects"
import { Contact } from "../sections/Contact"
import { About2 } from "../Pages/about2"

import '../../index.css'

export const Main = () => {
    const [menuOpen, SetMenuOpen] = useState(false)
    const [aboutOpen, SetAboutOpen] = useState(false)
  
    return (
    <>
    
    
    <Navbar menuOpen={menuOpen} SetMenuOpen={SetMenuOpen}></Navbar>
    <MobleMenu menuOpen={menuOpen} SetMenuOpen={SetMenuOpen}></MobleMenu>
    <Home />
    <About aboutOpen={aboutOpen} SetAboutOpen={SetAboutOpen}/>
    <About2 aboutOpen={aboutOpen} SetAboutOpen={SetAboutOpen}/>
    <Projects/>
    <Contact/>
  
  
    
    
  
  
    
    </>
    );
}





