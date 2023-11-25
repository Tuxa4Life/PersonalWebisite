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
                            I'm Nick, a developer. As a kid, I was always fascinated by the way computers worked. Soon enough, willpower overcame me and I started learning programming languages. I know that these aren't enough to thoroughly understand how this exciting technology is built. So I'm not going to stop. I'll surpass my limits and go to the infinity and beyond! Technology is future and whoever controls the technology, will control the future too.
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
                    <h4>// Tools in which I'm confident in</h4>
                    <div style={{fontSize: '48px', marginTop: '60px'}} className="skillsContainer">
                        <i style={{margin: '0 10px'}} class="html5 icon"></i>
                        <i style={{margin: '0 10px'}} class="sass icon"></i>   
                        <i style={{margin: '0 10px'}} class="js icon"></i>   
                        <i style={{margin: '0 10px'}} class="node icon"></i>   
                        <br />
                        <i style={{margin: '0 10px'}} class="react icon"></i>
                        <i style={{margin: '0 10px'}} class="fa-brands fa-cpanel"></i>
                        <i style={{margin: '0 10px'}} class="python icon"></i>
                        <i style={{margin: '0 10px'}} class="fa-brands fa-java"></i>
                        <br />  
                        <i style={{margin: '0 10px'}} class="fa-brands fa-c">#</i>
                        <i style={{margin: '0 10px'}} class="npm icon"></i>
                        <i style={{margin: '0 10px'}} class="github icon"></i> 
                        <i style={{margin: '0 10px'}} class="fa-brands fa-git-alt"></i>
                        <br />
                        <i style={{margin: '0 10px'}} class="fa-brands fa-slack"></i>
                    </div>

                    <h5>// And there are other things that I have average knowledge of</h5>
                </div>
                <div className="quote">
                    <h3>"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." <br /> - Martin Fowler</h3>
                </div>
            </section>
            <WaveFooter />
        </div>
    )
}

export default App;
