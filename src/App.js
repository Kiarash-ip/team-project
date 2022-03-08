import React from "react";
import Collaboration from "./components/Collaboration";
import "./scss/main.scss";

function App() {
  return (
    <div className="container">
      <img
        className="collab__logo"
        src="https://bookingo.tech/pics/logo.png"
        alt="logo"
      />
      <Collaboration />
    </div>
  );
}

export default App;
