import React from "react";

export const FormBtn = props => (
  <button {...props} style={{color: blue, marginBottom: 10 }} className="btn btn-success">
    {props.children}
  </button>
);
