import React from "react";

class FormContainer extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <form className="flex flex-col flex-wrap  w-full content-center" onSubmit={this.props.onSubmit}>
          {this.props.children}
        </form>
      );
    }
  }

export default FormContainer;