import React from "react";
import carritoLogo from "../assets/carrito.jpg";
import "./NavBar.css";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { itemCount } = React.useContext(CartContext);

  return (
    <div className="divCarrito">
      <img className="carrito" src={carritoLogo} alt="carritoLogo" />
      <p style={{fontSize: "1.2rem"}}>{ itemCount }</p>
    </div>
  );
}

export default CartWidget;
