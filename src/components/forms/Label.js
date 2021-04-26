import React from "react";

class Label extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <label className="font-bold   text-xs  text-gray-700 mb-2">
          {this.props.title}
        </label>
      );
    }
  }

  export default Label;