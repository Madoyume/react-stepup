import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Page1Wrapper from "./Page1Wrapper";
import Page1DetailA from "./Page1DetailA";
import Page1DetailB from "./Page1DetailB";
import Page2 from "./Page2";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Link to="/">Home</Link>
          <br />
          <Link to="/page1">Page1</Link>
          <br />
          <Link to="/page2">Page2</Link>
          <br />
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/page1" element={<Page1Wrapper />}>
            <Route path="detailA" element={<Page1DetailA />} />
            <Route path="detailB" element={<Page1DetailB />} />
          </Route>
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
