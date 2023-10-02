import logo from './logo.svg';
import './App.css';
import VendingMachine from './VendingMachine';
import Soda from "./Soda";
import Chips from "./Chips";
import CandyBar from "./CandyBar";
import NavBar from './NavBar';
import { Route, BrowserRouter, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Vending Machine</h1>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/soda" element={<Soda />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/candy-bar" element={<CandyBar />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
