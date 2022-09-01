import React from "react";
import styles from  '../Assets/Styles/TextEffect.css'

const TextEffect = ({ content }) => {
    return (
        <p style={styles} className="line-1 anim-typewriter">{ content }</p>
    )
}

export default TextEffect;