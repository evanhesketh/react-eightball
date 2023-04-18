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
  const [answer, setAnswer] = useState({
    color:"black",
    msg: "Think of a question"
  });

  function handleClick(evt) {
    const randomIdx = getRandomNum(answers.length);
    setAnswer(answers[randomIdx]);
    // FIXME: color and msg always go together - create 1 piece of state
    // as object of msg and color. ensures that you dn't update msg but not color, etc.
  }

  return (
    <div
      className="Eightball"
      style={{ backgroundColor: answer.color }}
      onClick={handleClick}
    >
      <p className="Eightball-msg">{answer.msg}</p>
    </div>
  );
}

export default Eightball;