import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../Components/NavBar";
import ItemListContainer from "../Components/ItemListContainer/itemListContainer";
import ItemDetailContainer from "../Components/ItemDetailContainer/itemDetailContainer";
import Home from "../Pages/Home";

const RutaPrincipal = () => {
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoria" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
      </Routes>
    </Router>
  );
};

export default RutaPrincipal;
