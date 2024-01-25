import { useState } from "react";

import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import MenuBar from "./components/MenuBar/MenuBar";

function App() {
  return (
    <div>
      <MenuBar />
      <Router>
        <div>
          <div>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
