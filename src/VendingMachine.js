import React from "react";
import { Route, BrowserRouter, Link, Routes } from "react-router-dom";
import Soda from "./Soda";
import Chips from "./Chips";
import CandyBar from "./CandyBar";

function VendingMachine() {
  return (
    <div className="VendingMachine">
      <Link className="VendingMachine-item" to="/soda">Soda</Link>
      <Link className="VendingMachine-item" to="/chips">Chips</Link>
      <Link className="VendingMachine-item" to="/candy-bar">Candy Bar</Link>
    </div>

  )

}

export default VendingMachine;

