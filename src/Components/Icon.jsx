import React from "react";

const Icon = (props) => {
    return <a style={{
        fontSize: '24px',
        color: 'black',
        margin: '0px 5px'
    }} href={props.href} target='_blank'><i className={props.className}></i></a>
}

export default Icon;