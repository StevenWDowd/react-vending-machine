import { Link } from "react-router-dom";
import { useState } from "react";
import "./Chips.css";


function Chips() {
  const [eaten, setEaten] = useState(0);

  function handleClick() {
    setEaten(e => e + 1);
  }

  return (
    <div className="Chips">
      <p>Here's your bag of chips.</p>
      <p>Bags Eaten: {eaten}</p>
      <button className="Chips-button" onClick={handleClick}>Eat Bag of Chips</button>
      <Link className="Chips-home-btn" to="/">Go Back</Link>
    </div>
  );

}

export default Chips;
