import React from "react";
import "./style.css";


function Jumbotron({ children }) {
  return (
    <div
      // style={{ height: 150, clear: "both", paddingTop: 60, textAlign: "center", backgroundColor: "grey"}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
