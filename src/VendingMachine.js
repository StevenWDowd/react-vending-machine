import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css";


function VendingMachine() {
  return (
    <div className="VendingMachine">
      <Link className="VendingMachine-item" to="/soda">Soda</Link>
      <Link className="VendingMachine-item" to="/chips">Chips</Link>
      <Link className="VendingMachine-item" to="/candy-bar">Candy Bar</Link>
    </div>
  );
}

export default VendingMachine;
