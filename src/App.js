import React, { useState } from "react";
import JSONDATA from "./MockData.json";

import "./styles.css";

const App = () => {
  const [searchItem, setSearchItem] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchItem(event.target.value);
        }}
      />
      {JSONDATA.filter((val) => {
        if (searchItem == "") {
          return val;
        } else if (
          val.first_name.toLowerCase().includes(searchItem.toLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div key={key}>
            <p className="design">{val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
