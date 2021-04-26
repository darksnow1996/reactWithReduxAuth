/* eslint-disable no-useless-constructor */
import React from "react";

class FormControl extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return <div className="flex flex-col mb-8">{this.props.children}</div>;
    }
  }

  export default FormControl;