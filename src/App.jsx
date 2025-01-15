import "./App.css";
import React from "react";
import { InlineStyle } from "./components/InlineStyle";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";

function App() {
  return (
    <>
      <InlineStyle />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </>
  );
}

export default App;
