import React from "react";
import "./portfolio.css";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "components/NavigationBar";
import { HomeScreen } from "./screens";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
