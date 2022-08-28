import React from "react";

// create a function
function ColorChangeButton(props) {
  // in console you see the colors red, blue, green  => all are an object
  //   console.log(props);
  //   add the color-key => props.color in {} (to say, this is jsx-code)
  //   & add the className of that props.color

  // now pass the setColor-function(with eventListener) from the App.js-file, using props
  return (
    <button className={props.color} onClick={() => props.setColor(props.color)}>
      {props.color}
    </button>
  );
}

export default ColorChangeButton;
