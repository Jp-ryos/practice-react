import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <>
      <h1>Hello World</h1>
      <p>こんにちは。こちらはテストページです。</p>
    </>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
