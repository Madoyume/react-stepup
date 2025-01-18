import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("param");

  return (
    <div>
      <h1>Page2ページです</h1>
      <p>URLパラメータの値: {id}</p>
      <p>クエリパラメータの値: {paramValue}</p>
      <Link to="/page2/100">URL Parameter</Link>
    </div>
  );
};

export default UrlParameter;
