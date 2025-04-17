import { useState } from 'react';

import { LoadingScreen } from './commponets/LoadingScreen';
import { Navbar } from './commponets/Navbar';
import { MobleMenu } from './commponets/MobleMenu';
import { Home } from "./commponets/sections/Home"
import { About } from "./commponets/sections/About"
import { Projects } from "./commponets/sections/Projects"
import { Contact } from "./commponets/sections/Contact"


import "./index.css"; 

function App() {
  const [isLoaded, SetIsLoaded] = useState(false)
  const [menuOpen, SetMenuOpen] = useState(false)
  return (
  <>
  {!isLoaded && <LoadingScreen onCompleate={() => SetIsLoaded(true)} />}
  
  <Navbar menuOpen={menuOpen} SetMenuOpen={SetMenuOpen}></Navbar>
  <MobleMenu menuOpen={menuOpen} SetMenuOpen={SetMenuOpen}></MobleMenu>
  <Home />
  <About />
  <Projects />
  <Contact />
  
  </>
  );
}


export default App;
