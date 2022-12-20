import React from "react";

const myStyle = {
  color: "#D45F10",
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

const Index = ({ logs }) => {
  return (
    <div>
      <h1 style={myStyle}>See All Logs!</h1>
      <a href="/logs/new">New Captain's Logs</a>
      <body style={bodyOne}></body>
      <ul>
        {logs.map((log, index) => {
          return (
            <li key={index}>
              <p>
                Title:<a href={`/logs/${log._id}`}> {log.title} </a>
              </p>
              <br />
              <p>Entry: {log.entry}</p>
              <br />
              <p>
                Ship Condition:{" "}
                {log.shipIsBroken
                  ? "The ship is broken"
                  : "The ship is in good condition"}
              </p>
              <br />
              <form
                  action={`/logs/${log._id}/edit`}
                  method="POST"
                ><input type="submit" value="EDIT" />
                </form>
              <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                <input type="submit" defaultValue="DELETE" />
              </form>
              <br />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Index;
