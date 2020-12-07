import "./style.css";
import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
import App from "./post.tsx";

ReactDOM.render(
  <>
    <App />
  </>,
  // deno-lint-ignore no-undef
  document.getElementById("root"),
);
