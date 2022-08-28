import React, { useState } from "react";
import "./App.css";

// after coloring buttons , add functionality onto the external div with className "react-root": by adding the class red to the red button, "blue" to the blue button etc if I click the  red/ blue/ green button => so I use here STATE ( => state isany data that changes over the course of the applicaation running) & REACT HOOKS ( write components using functions (instead of needing to use classes or objects)
// HOOKS are functions that  allow to hook into react features (added on top of app component)

function App() {
  // use array destructuring=>  store these two array items in different variables( color, setColor in const and in clg)
  const [color, setColor] = useState("yellow");
  // consoloe .log to see , what "color" is=> it's an array with 2 items in it: the first one is undefined and the second is a function
  // so the first item is the current value in state, so whatever color is set to at the moment and then the function is going to allow us to update state and set the color variable to different color
  console.log(color, setColor);
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
