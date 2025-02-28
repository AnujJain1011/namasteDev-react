import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  // console.log(err);
  return (
    <div>
      <h1 style={{ fontStyle: "italic" }}>Oops!!!!</h1>
      <h2 style={{ fontStyle: "italic" }}>Something went wrong!!!</h2>
      <h2 style={{ color: "red" }}>{err.data}</h2>
      <h3>
        {err.status} : {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
