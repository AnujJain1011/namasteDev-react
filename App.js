import React from "react";
import ReactDOM from "react-dom/client";

/*
<div>
  <h1 id='heading'>Akshay is here!</h1>
</div>
*/

// React.createElement => ReactElement - Js Object => HTMLElement(render)
const heading = React.createElement("h1", { id: "heading" }, "Akshay is here!");

console.log(heading);
//JSX => Babel transpiles it to React.createElement => ReactElement - Js Object => HTMLElement(render)
const JSXheading = <h1 id="head">Namaste React from JSX 🚀</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(JSXheading);

root.render(JSXheading);
