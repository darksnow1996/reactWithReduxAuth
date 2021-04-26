/* eslint-disable no-useless-constructor */
import React from "react";
import {Link} from "react-router-dom";

class A extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        return(
            <Link
            to={this.props.href}
            ></Link>
        );
    }
}

export default A;