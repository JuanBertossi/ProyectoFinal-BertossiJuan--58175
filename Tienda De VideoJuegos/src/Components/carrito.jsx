import React from "react";
import carritoLogo from "../assets/carrito.png";
import "./NavBar.css";

export default function CartWidget() {
  const click = () => {
  };

  return (
    <div className="divCarrito">
      <img onClick={click} className="carrito" src={carritoLogo} alt="carritoLogo" />
      <p className="cantidad">0</p>
    </div>
  );
}
