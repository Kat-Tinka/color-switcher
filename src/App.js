import React, { useState } from "react";
import "./App.css";

// use components to make the code less repetetive =>> create a second react component: file named "colorchangebutton.js"
function App() {
  const [color, setColor] = useState("");
  // console.log(color, setColor);
  return (
    // I want to plug the color var into the classname "react-root by telling react that I am writing javascript code by putting curly braces around this variable-> so I can add this color varaiblae to the react root_> which will be included to the string
    <div className={"react-root " + color}>
      <div className="centered">
        <h1>Color Picker</h1>
        {/* add functionality-> onClick and curly braces to say , this is java script code and pass an arrowfunction that calls the setColor function with red , etc */}
        <button className="red" onClick={() => setColor("red")}>
          red
        </button>
        <button className="blue" onClick={() => setColor("blue")}>
          blue
        </button>
        <button className="green" onClick={() => setColor("green")}>
          green
        </button>
      </div>
    </div>
  );
}

export default App;
