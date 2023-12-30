import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/client";
import { getDoc, doc } from "firebase/firestore";
import "./itemDetailContainer.css";
import { ItemQuantitySelector } from "../ItemQuantitySelector/ItemQuantitySelector";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const productRef = doc(db, "productos", itemId);
        const docSnap = await getDoc(productRef);

        if (docSnap.exists()) {
          setProducto({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error("No se encontró el producto con ID:", itemId);
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    obtenerProducto();
  }, [itemId]);

  if (!producto) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="item">
      <div className="item-link">
        <img src={producto.img} alt={producto.title} className="item-image" />
        <h1 className="item-title">{producto.title}</h1>
        <h3 className="item-category">{producto.category}</h3>
        <p className="item-description">{producto.description}</p>
        <h3 className="item-cant">Cantidad: {producto.stock}</h3>
        <h2 className="item-price">Precio: ${producto.price}</h2>
      </div>
      <ItemQuantitySelector />
    </div>
  );
};

export default ItemDetailContainer;
