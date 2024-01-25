import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default Routers;
