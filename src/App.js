// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './components/NavBar';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Projects } from './components/Projects';
import {Skills} from './components/Skills';
import { Banner } from './components/Banner';
// import { Banner } from './components/Banner';

function App() {
  return (
    <div className='App'>
      <NavBar /> 
      <Banner />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
      {/* <Banner /> */}
    </div>
  );
}

export default App;
