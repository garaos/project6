import Header from './components/Header';

import Home from './sections/Home'
import About from './sections/About';
import Skills from './sections/Skills';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';

import NavProvider from './context/NavContext'


function App() {
  return (
    <div>
      <NavProvider>
        <Header />
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </NavProvider>
    </div>
  );
}

export default App;
