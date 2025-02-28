import React from "react";
import UserClass from "./UserClass";
class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent constructor");
  }

  componentDidMount() {
    //Api Calls

    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Us</h1>
        <h3>This is Namaste React Web Series 🚀</h3>

        <UserClass name={"First Child"} />
        <UserClass Name={"Second child"} />
      </div>
    );
  }
}

export default About;
