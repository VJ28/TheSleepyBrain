import React from "react";
import AppRoutes from "./AppRoutes/index";
import Header from "./CommonComponents/Header";
import { Context } from "./utils/context";
const App = ({ data }) => {
  let [state, setState] = React.useState({ ...data });
  function updateContext(context) {
    setState({ ...state, ...context });
  }
  return (
    <>
      <Header />
      <Context.Provider value={{ ...state, updateContext }}>
        <AppRoutes />
      </Context.Provider>
    </>
  );
};

export default App;
