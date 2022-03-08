import "./App.css";
import ListUser from "./components/User/ListUser";
import Login from "./components/Login/login";
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<ListUser />} />
    </Routes>
  );
}

export default App;
