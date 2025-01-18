import { Route, Routes } from "react-router-dom";

import Home from "../Home";
import Page1Wrapper from "../Page1Wrapper";
import Page1DetailA from "../Page1DetailA";
import Page1DetailB from "../Page1DetailB";
import Page2 from "../Page2";
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";
import { UrlParameter } from "../UrlParameter";
import { Page404 } from "../Page404";

export const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      {page1Routes.map((route) => (
        <Route key={route.path} exact={route.exact} element={route.children} />
      ))}

      <Route path="/page1" element={<Page1Wrapper />}>
        <Route path="detailA" element={<Page1DetailA />} />
        <Route path="detailB" element={<Page1DetailB />} />
      </Route>
      {page2Routes.map((route) => (
        <Route key={route.path} exact={route.exact} element={route.children} />
      ))}
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page2/:id" element={<UrlParameter />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Router;
