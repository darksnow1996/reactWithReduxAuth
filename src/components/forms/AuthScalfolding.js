/* eslint-disable no-useless-constructor */
import React from "react";
import Logo from "../images/Logo";
import { Link } from "react-router-dom";

function AuthFooter(props) {
    let FooterText;
    if(props.type === "login"){
        FooterText = <div className="text-sm py-10"><p>
        Don't have an account?.<Link to="/register">Register</Link>
      </p>
      <p>Forgot Password?</p> </div>;        
    }else{
        FooterText = <div className="text-sm py-10"><p>
        Already have an account?.<Link to="/login">Login</Link>
      </p>
     </div>
    }
  return (
    <div className="flex flex-col text-white text-center">
     {FooterText}          
    </div>
  );
}

class AuthScalfolding extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col items-center overflow-auto overflow-hidden  min-h-screen h-screen min-w-screen w-screen  bg-blue-800 py-12">
        <div className="flex flex-col   w-full justify-center items-center">
          <Logo className="w-28" />
        </div>
        <div className="flex flex-wrap flex-col rounded-t-2xl rounded-br-2xl py-10 px-6 w-11/12 max-w-md sm:w-6/12 md:w-11/12  h-auto space-y-8 shadow-sm my-4   bg-white">
          {this.props.children}
        </div>

        <AuthFooter type={this.props.type}></AuthFooter>
      </div>
    );
  }
}

export default AuthScalfolding;
