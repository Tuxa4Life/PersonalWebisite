import React from "react";
import styles from '../Assets/Styles/WavyText.css'

const WavyText = ({ content }) => {
    return (
        <div style={styles} className="content">
            <h2>{ content }</h2>
            <h2>{ content }</h2>
        </div>
    )
}

export default WavyText;