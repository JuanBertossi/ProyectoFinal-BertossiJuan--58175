import React from "react";
import { Link, useParams } from "react-router-dom";
import "./ItemListContainer.css";
import Productos from '../Datos.json';

const ItemListContainer = () => {
  const { categoria } = useParams();

  const productosFiltrados = Productos.productos.filter((producto) => {
    if (categoria) {
      return producto.categoria.toLowerCase() === categoria;
    } else {
      return true;
    }
  });

  return (
    <div>
       <h2 className= "subtitulo">Catálogo de Productos</h2>
    <div className="item-container">
      {productosFiltrados.map((producto) => (
        <Link key={producto.id} to={`/item/${producto.id}`}>
          <div className="item">
            <img src={producto.img} alt={producto.nombre} className="item-image" />
            <h3 className="item-title">{producto.nombre}</h3>
            <p className="item-cant">Cantidad: {producto.cantidad}</p>
            <p className="item-price">Precio: ${producto.precio}</p>
          </div>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default ItemListContainer;
