import { React } from 'react'
import Navbar from './components/Navbar';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './App.css';
import Spline from '@splinetool/react-spline';



function App() {

  return (
    <div className="website-container">

      <section className="nav">
        <Navbar />
      </section>
      <section className="home">
        <div className="home-container">
          <ul id='home-socials'>
            <li className='social-item'><FaGithub /></li>
            <li className='social-item'><FaLinkedin /></li>
            <li className='social-item'><FaInstagram /></li>
          </ul>

          <div className="home-content">
            <h1 id='header-text'>Hi, I'm <span style={{ color: 'rgb(236, 93, 110)' }}>Zack</span> </h1>
            <h2 id='header-subtext'>Aspiring Frontend Developer</h2>
            <h3 id='header-description'>Studying a Bachelor of Computer Science at The University of Newcastle with a burning desire to break into the web development industry and create robust web-apps.</h3>
            <button id='contact'>Contact Me</button>
          </div>

          <div className="home-hero-photo">
            <Spline scene="https://draft.spline.design/0fnRmBFxw6wV5YFm/scene.spline" />
          </div>
        </div>

      </section>

      <section>
        <h1>poop</h1>
      </section>
    </div>
  );
}

export default App;
