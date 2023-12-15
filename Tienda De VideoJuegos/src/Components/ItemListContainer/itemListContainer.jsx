import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from '../../firebase/client';
import { getDocs, collection } from 'firebase/firestore';
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const productsRef = collection(db, 'productos');
        const data = await getDocs(productsRef);
        const productosData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProductos(productosData);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    obtenerProductos();
  }, [categoria]);

  const productosFiltrados = productos.filter((producto) => {
    if (categoria) {
      return producto.category.toLowerCase() === categoria;
    } else {
      return true;
    }
  });

  return (
    <div>
      <h2 className="subtitulo">Catálogo de Productos</h2>
      <div className="item-container">
        {productosFiltrados.map((producto) => (
          <Link key={producto.id} to={`/item/${producto.id}`}>
            <div className="item">
              <img src={producto.img} alt={producto.title} className="item-image" />
              <h1 className="item-title">{producto.title}</h1>
              <h3 className="item-category">{producto.category}</h3>
              <p className="item-description">{producto.description}</p>
              <h3 className="item-cant">Cantidad: {producto.stock}</h3>
              <h2 className="item-price">Precio: ${producto.price}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
