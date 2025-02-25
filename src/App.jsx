import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";

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
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
