import React from "react";

const myStyle = {
  color: "#3B7177",
  backgroundColor: "#F1AAB7",
  padding: "5px",
  fontFamily: "Helvetica",
  textAlign: "center",
};

const paraOne = {
  color: "#3B7177",
  backgroundColor: "#F1AAB7",
  padding: "5px",
  fontFamily: "Helvetica",
  textAlign: "center",
};

const paraTwo = {
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

const Show = ({ log }) => {
  return (
    <div>
      <h1 style={myStyle}>Title {log.title}</h1>
      <body style={bodyOne}></body>
      <p style={paraOne}>Entry {log.entry}</p>
      <p style={paraTwo}>
        {log.shipIsBroken ? " The ship is broken" : "Ship is still good"}
      </p>
      <br />
      <a href="/logs">Back</a>
    </div>
  );
};

export default Show;
