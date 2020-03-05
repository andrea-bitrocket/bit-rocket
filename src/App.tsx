import React, { Fragment } from "react";
import "./App.css";
import { BitRocketNavbar } from "./components/layout/Navbar";
import { ViewHome } from "./components/views/ViewHome";

const App: React.FC = (): JSX.Element => {
  return (
    <Fragment>
      <BitRocketNavbar />
      <ViewHome />
    </Fragment>
  );
};

export default App;
