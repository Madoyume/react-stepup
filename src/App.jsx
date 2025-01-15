import "./App.css";
import React from "react";
import { InlineStyle } from "./components/InlineStyle";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";

function App() {
  return (
    <>
      <InlineStyle />
      <StyledJsx />
      <StyledComponents />
    </>
  );
}

export default App;
