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
                        <li><h4>HTML</h4> - Semantic UI, Bootstrap </li>
                        <li><h4>CSS </h4> - SCSS </li>
                        <li><h4>JavaScript </h4> - jQuery, ReactJS .</li>
                        <li><h4>Python</h4> - openCV, pyautogui</li>
                        <li><h4>C#</h4> - WPF, Unity</li>
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
