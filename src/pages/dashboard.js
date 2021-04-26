import React from "react";
import {connect} from "react-redux"
import * as forms from "../components/forms"
import {logoutUser} from "../redux/actions"

class Dashboard extends React.Component{
    constructor(props){
        super(props)

    }

    logOut = (e) => {
        e.preventDefault()
        this.props.logoutUser()
    }

    

    render(){
        
        return <div>Welcome to the dashboard <forms.ButtonBlue 
        title="logout"
        type="button"
        onClick={this.logOut}

        ></forms.ButtonBlue></div>
    }
}

const mapStateToProps = (state)=> {
    return {
        
    }
}
export default connect(mapStateToProps, {logoutUser}) (Dashboard)