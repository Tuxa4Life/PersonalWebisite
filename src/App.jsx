import React from "react";
import Hello from "./Components/Hello";
import Cube from "./Components/Cube";
import WavyText from "./Components/WavyText";
import WaveFooter from "./Components/WaveFooter";
import styles from './Assets/Styles/App.css'

const App = () => {
    return (
        <div style={styles} className="container">

            <section className="hello">
                <div className="hello-wrapper">
                    <Hello className={'helloComponent'}/>
                    <Cube className={'cubeComponent cube'}/>
                </div>
            </section>
            <hr />
            <section className="about-me">
                <div className="about-me-wrapper">
                    <div className="about-me-content">
                        <h4>// About Me</h4>
                        <p>
                            I'm Nick, a developer. As a kid, I always was fascinated by the way computers have worked. Soon enough, willpower overcame me and I started learning programming languages. However, I know that these aren't enough to thoroughly understand how this exciting technology works. So I'm not going to stop. I'll surpass my limits and go to the infinity nad beyond! I will achieve my dreams and live with the best life. Technology is future and whoever controls the technology, will control the future too.
                        </p>

                        <br />

                        <h4>// Belief</h4>
                        <p>
                            Nothing comes out without working. Only hardwork and diligence will sew your road to the success.
                        </p>
                    </div>
                    <div className="wavy-text-container">
                        <WavyText content={'WORK'}/>
                        <WavyText content={'&'}/>
                        <WavyText content={'BELIEVE'}/>
                    </div>
                </div>
            </section>
            <hr />
            <section className="skills">
                <div className="skills-wrapper">
                    <h4>// Skills</h4>
                    <ul>
                        <li><h4>HTML <strong>100%</strong></h4> - Semantic UI <strong>100%</strong>, Bootstrap <strong>60%</strong></li>
                        <li><h4>CSS <strong>100%</strong></h4> - SCSS <strong>100%</strong></li>
                        <li><h4>JavaScript <strong>80%</strong></h4> - jQuery <strong>50%</strong>, ReactJS <strong>80%</strong>.</li>
                        <li><h4>Python <strong>100%</strong></h4></li>
                        <li><h4>C# <strong>100%</strong></h4> - WPF <strong>70%</strong>, Unity<strong>65%</strong></li>
                    </ul>
                </div>
                <div className="quote">
                    <h4>"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." <br /> - Martin Fowler</h4>
                </div>
            </section>
            <WaveFooter />
        </div>
    )
}

export default App;
