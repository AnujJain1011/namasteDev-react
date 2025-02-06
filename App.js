import React from "react";
import ReactDOM from "react-dom/client";

/*
<div>
  <h1 id='heading'>Akshay is here!</h1>
</div>
*/

// React.createElement => ReactElement - Js Object => HTMLElement(render)
const heading = React.createElement("h1", { id: "heading" }, "Akshay is here!");

//Functional Component
const Title = () => <h1 id="title">Namaste React from JSX 🚀</h1>;

//Component Composition
var Heading = () => (
  <div>
    {heading}
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading">Namaste React from Functional Component 🚀</h1>
  </div>
);

const elem = (
  <h1>
    BOOM!!!!
    {/* a component inside a react element */}
    <Heading />
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(elem);
