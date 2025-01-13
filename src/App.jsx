import "./App.css";
import React, { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./components/ChildArea";

function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  console.log("Appがレンダリングされた！");

  const onClickOpen = () => setOpen(!open);

  const onChangeText = (e) => setText(e.target.value);

  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <>
      <div className="App">
        <input value={text} onChange={onChangeText} />
        <br />
        <br />
        <button onClick={onClickOpen}>表示</button>
        <ChildArea open={open} onClickClose={onClickClose} />
      </div>
    </>
  );
}

export default App;
