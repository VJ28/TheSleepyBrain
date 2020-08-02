import React from "react";
import { hydrate, render } from "react-dom";
import { loadableReady } from "@loadable/component";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./app";

// loadableReady(() => {
//   hydrate(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>,
//     document.getElementById("root")
//   );
// });

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
