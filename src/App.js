import React from "react";
import JSONDATA from "./MockData.json";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <input type="text" placeholder="Seaarch..." />
      {JSONDATA.map((val, key) => {
        return <div>{val.first_name}</div>;
      })}
    </div>
  );
};

export default App;
