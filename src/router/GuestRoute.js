import React from "react"
import {connect} from "react-redux"
import {Redirect,Route} from "react-router-dom"

class GuestRoute extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
      return ( 
          !this.props.isAuthenticated
       ? (<Route exact={this.props.exact} path={this.props.path} component={this.props.component}/>)
       :(<Redirect to="/dashboard"/>))
    }

}




const mapStateToProps = (state) =>{
    return {
        isAuthenticated : state.auth.isAuthenticated
     }
}

export default connect(mapStateToProps,{})(GuestRoute)