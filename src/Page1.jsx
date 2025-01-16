import { Outlet, Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <>
      <div>
        <h1>Page1</h1>
        <Link to="detailA">Page1DetailA</Link>
        <br />
        <Link to="detailB">Page1DetailB</Link>
        <Outlet />
      </div>
    </>
  );
};

export default Page1;
