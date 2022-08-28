import React, { useState } from "react";
import ColorChangeButton from "./colorchangebutton";
import "./App.css";

// import created colorChangebtn-file and add  the button*3 after <h1>
// replace the oroginal btns with the new ones-> so  their colors and the setColor functionality should work here=> by using PROPS =< PROPS is data that is passed from component to the component in react (=> color="red"/ etc.)
// when I check now the props in the console=> I see the color for each button and also the setColor function
function App() {
  const [color, setColor] = useState("");
  // console.log(color, setColor);
  return (
    <div className={"react-root " + color}>
      <div className="centered">
        <h1>Color Picker</h1>
        <ColorChangeButton color="red" setColor={setColor} />
        <ColorChangeButton color="blue" setColor={setColor} />
        <ColorChangeButton color="green" setColor={setColor} />
      </div>
      {/* the "old buttons " are deleted now */}
    </div>
  );
}

export default App;
