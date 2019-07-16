import React, { Component } from "react";

const CoolButton = props => {
  return (
    <div>
      <button className={props.style}>{props.name}</button>
    </div>
  );
};

export default CoolButton;
