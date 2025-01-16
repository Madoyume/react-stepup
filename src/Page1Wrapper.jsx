import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const Page1Wrapper = () => {
  const location = useLocation();
  const isDetailPage =
    location.pathname.includes("detailA") ||
    location.pathname.includes("detailB");

  return (
    <div>
      {!isDetailPage && <h1>Page1</h1>}
      <Link to="detailA">Page1DetailA</Link>
      <br />
      <Link to="detailB">Page1DetailB</Link>
      <Outlet />
    </div>
  );
};

export default Page1Wrapper;
