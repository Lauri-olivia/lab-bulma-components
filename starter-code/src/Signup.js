import React, { Component } from "react";
import Navbar from "./Navbar";
import Formfield from "./Formfield";
import CoolButton from "./CoolButton";

const Signup = props => {
  return (
    <div>
      <Navbar />
      <Formfield type="name" placeholder="put in your name" />
      <Formfield type="email" placeholder="put in your email" />
      <Formfield type="password" placeholder="put in your password" />
      <CoolButton
        style="button is-rounded my-class is-danger is-small"
        name="submit"
      />
    </div>
  );
};

export default Signup;
