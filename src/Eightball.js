import getRandomNum from "./random";
import { useState } from "react";
import "./Eightball.css";

/** Eightball showing message with a color
 *
 * Props:
 * - answers: array of objects of [{color, msg}...]
 *
 * State:
 * - color: "black"  (changes background color of eightball)
 * - msg: "Think of a question"
 *
 * App --> Eightball
 */

function Eightball({ answers }) {
  const [color, setColor] = useState("black");
  const [msg, setMsg] = useState("Think of a question");

  function handleClick(evt) {
    const randomIdx = getRandomNum(answers.length);
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
      <p className="Eightball-msg">{msg}</p>
    </div>
  );
}

export default Eightball;