import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./task/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Connect from "./task/login";
import Deposit from "./task/deposit";
import Withdraw from "./task/withdraw";
import Stake from "./task/stake";
import VotePage from "./task/vote";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/stake" element={<Stake />} />
        <Route path="/vote" element={<VotePage />} />
        <Route path="/" element={<Connect />} />
      </Routes>
    </Router>
  );
}

export default App;
