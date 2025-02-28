import React from "react";
//React.Component is a in-built class from React ,we inherit properties from React.Component using extends keyword
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };
    console.log("Child Constructor");
  }

  componentDidMount() {
    //API call

    console.log("Child ComponentDidMount");
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;

    console.log("Child Render");
    return (
      <div className="user-card">
        <h1>Count:{count}</h1>
        <h1>Count:{count2}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          CountDown
        </button>
        <h3>Name: {name}</h3>
        <h4>Location: {location}</h4>
        <h5>Contact: @Anujjain1011</h5>
      </div>
    );
  }
}

export default UserClass;
