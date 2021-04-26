/* eslint-disable no-useless-constructor */
import React from "react";
import {connect} from "react-redux"
import {loginUser} from "../../redux/actions"
import {
  AuthScalfolding,
  FormContainer,
  FormControl,
  Input,
  Label,
  ButtonBlue
} from "../forms"
import {Redirect} from "react-router-dom"



function AuthHeader(props) {
  return (
    <div className="text-center my-3">
      <h3 className=" text-blue-900 tracking-tight  font-semibold text-2xl">
        {props.title}
      </h3>
      <p className="text-sm text-gray-400">{props.subtitle}</p>
    </div>
  );
}



class LoginForm extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      email:'',
      password: '',
    }
  }

  componentDidMount(){
    //console.log(this.props.isAuthenticated)
  }

  handleSubmit = (e)=> {
    e.preventDefault();
    //send data to the backend
    let data = {
        email: this.state.email,
        password: this.state.password
    }
    this.props.loginUser(data)   

} 

handleChange = (e)=>{
    let nam = e.target.name;
    let val = e.target.value;
    //console.log(val);
    this.setState({[nam]: val});
}
  render() {
    return !this.props.isAuthenticated ? (<AuthScalfolding 
    type="login"
    >
    <AuthHeader
            title=" Login to your account"
            subtitle="Securely login to your PiggyVest"
          ></AuthHeader>

          <FormContainer onSubmit={this.handleSubmit}>
            <FormControl>
              <Label title="Email or phone Number"></Label>
              <Input  onChange={this.handleChange} value={this.state.email} name="email" type="email"></Input>
            </FormControl>
            <FormControl>
              <Label title="Password"></Label>
              <Input value={this.state.password}  onChange={this.handleChange} name="password" type="password"></Input>
            </FormControl>

            <div className="flex flex-col w-11/12">
              <ButtonBlue title="log in"></ButtonBlue>
            </div>
          </FormContainer>

          
    </AuthScalfolding>):<Redirect to="/dashboard"/>
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.auth.loginErr,
    isAuthenticated:state.auth.isAuthenticated,

  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    loginUser: dispatch(loginUser)
  }
}

export default connect(mapStateToProps,{loginUser}) (LoginForm);
