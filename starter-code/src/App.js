import React, { Component } from "react";
import Signup from "./Signup";
import Message from "./Message.js";

export class App extends Component {
  render() {
    return (
      <div>
        <Signup />
        <Message title="Hello World" input= "Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque risus mi"/>
      </div>
    );
  }
}

export default App;
