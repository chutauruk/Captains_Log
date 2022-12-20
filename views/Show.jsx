import React from "react";

const myStyle = {
  color: "#D45F10",
  backgroundColor: "#000000",
  padding: "5px",
  fontFamily: "Helvetica",
  textAlign: "center",
};

const paraOne = {
  color: "#975878",
  backgroundColor: "#000000",
  padding: "5px",
  fontFamily: "Helvetica",
  textAlign: "center",
};

const paraTwo = {
  color: "#975878",
  backgroundColor: "#000000",
  padding: "5px",
  fontFamily: "Helvetica",
  textAlign: "center",
};

const bodyOne = {
  color: "#975878",
  backgroundColor: "#000000",
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
