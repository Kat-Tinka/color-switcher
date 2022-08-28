import React from "react";
import "./App.css";

function App() {
  return (
    <div className="react-root">
      {/* center the content on the page */}
      <div className="centered">
        {/* header to title the page */}
        <h1>Color Picker</h1>
        {/* three buttons with classNames */}
        <button className="red">red</button>
        <button className="blue">blue</button>
        <button className="green">green</button>
      </div>
    </div>
  );
}

export default App;
