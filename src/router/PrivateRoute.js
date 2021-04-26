import React from "react"
import {connect} from "react-redux"
import {Redirect,Route} from "react-router-dom"
import {checkStatus} from "../data/auth"
import {userSessionExpired} from "../redux/actions"

class PrivateRoute extends React.Component{
    constructor(props){
        super(props)
    }

    

   async componentDidMount(){
        try{
            await checkStatus()
        }   
        catch(error){
          //  console.log(error.message)
           this.props.userSessionExpired()          
        }     
    }
    componentDidUpdate(){

    }

    render(){

        return (
        this.props.isAuthenticated
        ? (<Route exact={this.props.exact}  path={this.props.path} component={this.props.component}/>)
        :(<Redirect to="/login"/>))
    }

}




const mapStateToProps = (state) =>{
    return {
        isAuthenticated : state.auth.isAuthenticated
     }
}

export default connect(mapStateToProps,{userSessionExpired})(PrivateRoute)