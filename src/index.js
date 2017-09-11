import React from "react";
import ReactDOM from "react-dom";

import Slide1 from "./images/01.jpg";
import Slide2 from "./images/02.png";
import Slide3 from "./images/03.gif";

const App = () => <div>
  <img src={Slide1} />
  <img src={Slide2} />
  <img src={Slide3} />
</div>;

const render = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};

const el = document.createElement("main");
el.id = "root";
document.body.appendChild(el);
render();
