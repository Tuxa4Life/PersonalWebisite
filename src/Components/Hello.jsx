import React from "react";
import TextEffect from "./TextEffect";

const Hello = ({ className }) => {
    return (
        <div className={className}>
            <h2>Hello! I'm</h2>
            <h1 style={{
                backgroundColor: 'white',
                color: 'black',
                width: '300px',
                padding: '5px',
                fontSize: '28px'
            }}>Nikoloz Tukhashvili</h1>
            <h3>But you can call me Tuxa.</h3>
            <TextEffect content={'I am Full-Stack Developer and Software Engineer.'}/>
        </div>
    )
}

export default Hello;