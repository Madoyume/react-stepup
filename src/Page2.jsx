import React from "react";
import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2</h1>
      <Link to="/page2/100?param=value">URL Parameter</Link>
    </div>
  );
};

export default Page2;
