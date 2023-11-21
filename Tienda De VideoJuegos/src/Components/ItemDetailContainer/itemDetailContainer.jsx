import React from "react";
import { Link, useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import Productos from '../Datos.json';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const id = parseInt(itemId);
  const producto = Productos.productos.find((p) => p.id === id);


  const addToCart = () => {
    console.log(`Añadir al carrito: ${producto.nombre}`);
  };

  return (
    <div className="item">
      <div to={`/item/${producto.id}`} className="item-link">
        <img src={producto.img} alt={producto.nombre} className="item-image" />
        <h3 className="item-title">{producto.nombre}</h3>
        <p className="item-cant">Cantidad: {producto.cantidad}</p>
        <p className="item-price">Precio: ${producto.precio}</p>
      </div>
      <button onClick={addToCart} className="item-button">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemDetailContainer;
