import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Experiences from './components/Experiences'
import Awards from './components/Awards'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Education />
      <Experiences/>
      <Awards/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
