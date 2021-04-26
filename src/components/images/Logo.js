import React from "react";
import logo from "../../logo.svg";

const Logo = (props) => {
    return (
        <img src={logo} alt="logo" className={props.className} />        
    );
}

export default Logo;