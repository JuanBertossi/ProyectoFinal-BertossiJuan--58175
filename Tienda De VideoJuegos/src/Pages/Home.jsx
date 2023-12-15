import React from "react";
import ItemListContainer from "../Components/ItemListContainer/itemListContainer";
import "../Pages/Pages.css"

const Home = () => {
  return (
    <div>
      <h2 className="subtituloPag">Explora nuestros videojuegos o giftcards.</h2>
      <ItemListContainer />
    </div>
  );
};

export default Home;