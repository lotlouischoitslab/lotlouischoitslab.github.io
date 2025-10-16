import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Licenses from './components/Licenses'
import Experiences from './components/Experiences'
import Publications from './components/Publications'
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
      <Licenses/>
      <Experiences/>
      <Publications/>
      <Awards/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
