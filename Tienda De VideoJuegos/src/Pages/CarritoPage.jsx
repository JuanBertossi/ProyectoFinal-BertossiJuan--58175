import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CarritoPage = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);

  const calcularTotalCarrito = () => {
    return cartItems.reduce(
      (total, item) => total + parseFloat(item.price) * parseInt(item.stock),
      0
    );
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>Stock: {parseInt(item.stock)}</p>
              <p>Precio unitario: ${parseFloat(item.price)}</p>
              <p>Total: ${parseFloat(item.price) * parseInt(item.stock)}</p>
            </div>
          ))}
          <p>Total del carrito: ${calcularTotalCarrito()}</p>
        </div>
      )}
    </div>
  );
};

export default CarritoPage;
