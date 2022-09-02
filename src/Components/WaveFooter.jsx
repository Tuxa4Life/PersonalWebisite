import React from "react";
import Icon from './Icon'
import styles from '../Assets/Styles/WaveFooter.css'

const WaveFooter = () => {
    return (
        <footer style={styles}>

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
    )
}

export default WaveFooter;