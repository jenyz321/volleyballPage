import React from "react";
import "./style.css";
// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group row">
      <div className="col-md-8">
      <input className="form-control input-lg" id="inputlg" {...props} />
      </div>
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group row">
      <div className="col-md-8">
      <textarea className="form-control" rows="10" {...props} />
      </div>
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "left", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
