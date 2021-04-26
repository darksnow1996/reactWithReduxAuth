import React from "react";
import {AuthScalfolding} from "../components/forms";
import RegisterForm from "../components/auth/RegisterForm";

class Register extends React.Component{

    render(){
        return (
            <AuthScalfolding
            type="register">
            <RegisterForm />
            </AuthScalfolding>
        );
    }
}

export default Register;