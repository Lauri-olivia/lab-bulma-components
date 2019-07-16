import React, { Component } from "react";

const Message = props => {
    return (
        <div>
       <article className="message">
  <div className="message-header">
    <p>{props.title}</p>
    <button className="delete" aria-label="delete"/>
  </div>
  <div className="message-body">
    {props.input}
  </div>
</article>
        </div>
      )
    };

export default Message;
