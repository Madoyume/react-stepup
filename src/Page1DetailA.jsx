import React from "react";
import { useLocation } from "react-router-dom";

const Page1DetailA = () => {
  const location = useLocation();
  const { arr = [] } = location.state || {};

  return (
    <div>
      <h2>Page1DetailA</h2>
      <p>配列の内容: {arr.join(", ")}</p>
    </div>
  );
};

export default Page1DetailA;
