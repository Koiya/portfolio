import {useState} from 'react'
// Logo/Icons
import githubLogo from './assets/github-mark.svg'
import linkedInLogo from './assets/InBug-Black.png'
import resumeLogo from './assets/resume.svg'
import reactLogo from './assets/react.svg'
import './App.css'
import {Reveal} from "./components/Reveal.jsx";

function App() {
    return (
        <div className="container">
            <section className="header-section">
                <Reveal>
                    <h1>Daniel Nguyen</h1>
                    <h3>Software Engineer</h3>
                    <div id="linksContainer">
                        <a href="#">
                            <img src={linkedInLogo} className="logo" alt={"LinkedIn"} />
                        </a>
                        <a href="#">
                            <img src={githubLogo} className="logo" alt={"Github"} />
                        </a>
                        <div id="resumeContainer">
                            <a id="resumeLogo" href="#">
                                <img src={resumeLogo} className="logo" alt={"Resume"} />
                            </a>
                            <div id="resume">Resume</div>
                        </div>
                    </div>
                    <p>Email: danielnguyen10101@gmail.com</p>
                </Reveal>
            </section>
            <section className="section">
                <Reveal>
                    <h2>Technologies</h2>
                    <img src={reactLogo} className="techLogo" alt={"React Logo"} />
                    <p>
                        React.JS, JavaScript, Node.JS, Go
                    </p>
                </Reveal>
            </section>
            <section className="section">
                <Reveal>
                    <h2>Projects</h2>
                    <p>
                        React.JS, JavaScript, Node.JS, Go
                    </p>
                </Reveal>
            </section>
        </div>
    )
}

export default App
