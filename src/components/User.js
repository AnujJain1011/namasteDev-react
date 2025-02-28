import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  const { name, location } = props;
  return (
    <div className="user-card">
      <h1>Count:{count}</h1>
      <h1>Count2:{count2}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        CountUp
      </button>
      <h3>Name: {name}</h3>
      <h4>Location:{location}</h4>
      <h5>Contact: @Anujjain1011</h5>
    </div>
  );
};

export default User;
