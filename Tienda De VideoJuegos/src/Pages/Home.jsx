import React from "react";
import ItemListContainer from "../Components/ItemListContainer/itemListContainer";
import "../Pages/Pages.css"

const Home = () => {
  return (
    <div>
      <h2>Tienda De VideoJuegos</h2>
      <p>Explora nuestros videojuegos o giftcards.</p>
      <ItemListContainer />
    </div>
  );
};

export default Home;