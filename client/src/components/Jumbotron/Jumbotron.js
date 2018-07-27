import React from "react";
import phones from "./polyheadphone.jpg";

const Jumbotron = ({ children }) => (
  <div class="row">
  <div
    style={{ backgroundImage: "coffeevinyl.jpg", height: 200, clear: "both", paddingTop: 50, textAlign: "center" }}
 
    className="jumbotron"
  >
    {children}
    
      <img src={phones} style={{ height: 400, clear: "both", paddingTop: 5, align: "left" }}></img>
    </div>
  </div>
);

export default Jumbotron;



//style = {{ backgroundImage: "carbonf.png", height: 200, clear: "both", paddingTop: 50, textAlign: "center" }}