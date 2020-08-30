import React from "react";
import { hydrate, render } from "react-dom";
import { loadableReady } from "@loadable/component";
import { BrowserRouter } from "react-router-dom";
import App from "./app";

const renderMethod = typeof window !== "undefined" ? render : hydrate;
loadableReady(() => {
  renderMethod(
    <BrowserRouter>
      <App data={window.data} />
    </BrowserRouter>,
    document.getElementById("root")
  );
});
