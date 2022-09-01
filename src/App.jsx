import React from "react";
import Hello from "./Components/Hello";
import Cube from "./Components/Cube";
import WavyText from "./Components/WavyText";
import Icon from "./Components/Icon";
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
                            My name's Nick, I'm developer. As a kid, I always was fascinated by the way computers worked. Soon enough willpower overcame me and I started learning programming languages. Though I know that these aren't enough to fully understand how this wonderful modern technology works, so I'm not going to stop. Surpassing my limits are only way and nothing's going to stop me. I will achieve my dreams and live with best life. Technology is future and whoever controls the technology, will control the future too.
                        </p>

                        <br />

                        <h4>// Belief</h4>
                        <p>
                            Nothing comes out without working. Only hardwork and diligence will sew your road to success.
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
            <footer>

                <div className="header">
                <div>
                <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                </g>
                </svg>
                </div>
                </div>

                <div className="content flex" style={{
                    color: 'black',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <h3>Contact:</h3>
                    <div className="icons"><Icon href='https://www.facebook.com/tuxa4life' className='fa fa-brands fa-facebook'/>
                    <Icon href='https://github.com/Tuxa4Life' className='fa fa-brands fa-github'/>
                    <Icon href='https://www.linkedin.com/in/tuxa4life/' className='fa fa-brands fa-linkedin'/>
                    <Icon href='https://www.instagram.com/tuxa4life/' className='fa fa-brands fa-instagram'/></div>
                    <p>nikoloztuxa@gmail.com</p>
                </div>
            </footer>
        </div>
    )
}

export default App;