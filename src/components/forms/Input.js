import React from "react";

class Input extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <input
          onChange={this.props.onChange}
          name={this.props.name}
          type={this.props.type}
          value={this.props.value}
          className="w-full p-3 bg-gray-200 text-gray-500 outline-none rounded-sm"
        />
      );
    }
  }

  export default Input;