
import React from "react";
class ButtonBlue extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <button type={this.props.type} className="flex flex-col flex-wrap justify-center content-center my-4  w-full py-3 px-10 antialiased font-bold text-white uppercase rounded-t-md rounded-br-md bg-blue-500 hover:text-white text-lg hover:bg-blue-800" onClick={this.props.onClick}>
          {this.props.title}
        </button>
      );
    }
  }

  export default ButtonBlue;