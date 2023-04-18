import getRandomIdx from "./random";
import { useState } from "react";
import "./Eightball.css";

function Eightball({ answers }) {
  const [color, setColor] = useState("black");
  const [msg, setMsg] = useState("Think of a question");

  function handleClick(evt) {
    const randomIdx = getRandomIdx(answers.length);
    const { msg, color } = answers[randomIdx];
    setColor(color);
    setMsg(msg);
  }

  return (
    <div
      className="Eightball"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      <p>{msg}</p>
    </div>
  );
}

export default Eightball;