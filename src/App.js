import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './App.css';
/*
Create a palette color:

Create an array with a group of colors.
Loop through this array and create a button for each color.
Clicking the button will change the state color of the page
you can add the style directly to the div
    <div style={{backgroundColor: color}}>

*/
const App = () => {
  const colors = [
    "#7B8FA1",
    "#567189",
    "#E4C988",
    "#C27664",
    "#658864",
    "#13005A",
    "#820000",
    "#6F1AB6",
    "#F3CCFF",
    "#227C70"
  ];
  const [backgroundColor, setBackgoundColor] = useState("#7B8FA1");
  const [current, setCurrent] = useState();

  return (
    <div className="App" style={{ background: backgroundColor }}>
      {current !== null && <h1>Copied {current}</h1>}
      <div className='container'>
        {colors.map((color, index) => (
          <div className='card' key={index}>
            <div
              style={{
                background: color,
                filter: "brighness(85%)",
                boxShadow: color === backgroundColor ? "0 0 5px #000" : ""
              }}
              className='box'
              onClick={() => setBackgoundColor(color)}>
            </div>

            <CopyToClipboard text={`color ${color}:`}>
              <p
                style={{
                  color: color === backgroundColor ? "#000" : color
                }}
                onClick={() => setCurrent(color)}
              >
                {color}
              </p>
            </CopyToClipboard>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
