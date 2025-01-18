import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  const navigate = useNavigate();

  const onClickDetailA = () => {
    navigate("detailA", { state: { arr } });
  };

  console.log("Rendering Page1 component");

  return (
    <>
      <div>
        <h1>Page1</h1>
        <Link to="detailA" state={{ arr }}>
          Page1DetailA
        </Link>
        <br />
        <Link to="detailB">Page1DetailB</Link>
        <br />
        <button onClick={onClickDetailA}>Go to DetailA</button>
        <Outlet />
      </div>
    </>
  );
};

export default Page1;
