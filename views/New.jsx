import React, { Component } from "react";

const myStyle = {
  color: "#3B7177",
  backgroundColor: "#F1AAB7",
  padding: "5px",
  fontFamily: "Helvetica",
  textAlign: "center",
};
const bodyOne = {
  color: "#3B7177",
  backgroundColor: "#F1AAB7",
  padding: "5px",
  fontFamily: "Helvetica",
  textAlign: "center",
};

export default class New extends Component {
  render() {
    return (
      <div>
        <h1 style={myStyle}> New Captain's Entry Log</h1>
        <body style={bodyOne}></body>
        <form action="/logs" method="post">
          Title: <input type="text" name="title" /> <br />
          Entry: <input type="textarea" name="entry" /> <br />
          Is Ship Broken?: <input type="checkbox" name="shipIsBroken" />
          <br />
          <input type="submit" name="" value="Create Ship Entry" />
        </form>
        <a href="/pokemon">Return without editing</a>
      </div>
    );
  }
}

