import React from "react";

export const FormBtn = props => (
  <button {...props} style={{marginBottom: 1 }} className="btn btn-success">
    {props.children}
  </button>
);
