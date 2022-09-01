import React from "react";
import styles from '../Assets/Styles/Cube.css'

const Cube = ({ className }) => {
    return (
        <div style={styles} className={className}>
            <div>HTML</div>
            <div>CSS</div>
            <div>JavaScript</div>
            <div>C#</div>
            <div>Python</div>
            <div>ReactJS</div>
        </div>
    )
}

export default Cube;