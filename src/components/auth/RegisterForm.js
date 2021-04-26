import React from "react";
import {register} from "../../data/auth"
import {Redirect} from "react-router-dom"

import {
    
    FormContainer,
    FormControl,
    Input,
    Label,
    ButtonBlue
} from "../forms"


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


class RegisterForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email : '',
            password: '',
            name: '',
            registerMsg: ''
        }
    }

    componentDidCatch(){
        console.log('error caught')
    }
    componentDidMount(){
        // register({name: "damola",email: "oluyemodamola@gmail.com", password: "Nigerpalace@123"});
    }

    handleSubmit = async(e)=> {
        try{
        e.preventDefault();
        //send data to the backend
        let data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        const {message} = await register(data);
        //console.log(message)
        this.setState({
            registerMsg : message
        });
    }
    catch(error){
       // console.log(error)
        this.setState({
            registerMsg : error.message
        });

    }

    } 

    handleChange = (e)=>{
        let nam = e.target.name;
        let val = e.target.value;
        //console.log(val);
        this.setState({[nam]: val});
    }

    render(){
        return this.state.registerMsg ==="Registration successful" ?  <Redirect to="/login"/>:(
            <div>
            <div className="bg-white absolute flex flex-row right-0 top-2 shadow-lg rounded-tl-lg rounded-bl-lg border-l-2 border-red-600 p-5 pl-2">
                <p>{this.state.registerMsg}</p>
            </div>           
    <AuthHeader
            title="Register"
            subtitle="Register with email to start saving"
          ></AuthHeader>

          <FormContainer onSubmit={this.handleSubmit}>
            <FormControl>
              <Label title="Full Name"></Label>
              <Input onChange={this.handleChange} name="name"  type="text"></Input>
            </FormControl>
            <FormControl>
              <Label title="Email or phone Number"></Label>
              <Input onChange={this.handleChange} name="email"  type="email"></Input>
            </FormControl>
            
            <FormControl>
              <Label title="Password"></Label>
              <Input onChange={this.handleChange} name="password" type="password"></Input>
            </FormControl>

           
            <div className="flex flex-col w-11/12">
              <ButtonBlue type="submit" title="register"></ButtonBlue>
            </div>
          </FormContainer>
          </div>
   
        );
    }
}

export default RegisterForm;