import React from 'react';
import About from './components/About';
import NavBar from './components/NavBar';
import Slides from './components/Slides';
import TitleMessage from './components/TitleMessage';
import Skills from './components/Skills';
import { Parallax } from "react-parallax";
import { Container } from "react-bootstrap";
import { Fade, Slide } from "react-reveal";
import BackroundAbout from './assets/img/parallex/background.webp';
import Experience from './components/Experience';
import './App.css';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import FooterPanel from './components/FooterPanel';

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <NavBar />
      <Slides />
      <TitleMessage />
      
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={BackroundAbout}
          bgImageAlt="About Image"
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={2000}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>

      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>

      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <Experience />
          </Fade>
        </Container>
      </div>

      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Projects />
        </Slide>
      </Container>
      
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>

      <hr />
      <FooterPanel />
    </div>
  )
}

export default App;