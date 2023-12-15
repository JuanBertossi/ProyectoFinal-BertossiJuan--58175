import React from 'react'
import { CartContext } from '../../context/CartContext'

export const AddItemButton = ({label = "Agregar al carrito", quantity, handleResetQuantity}) => {
  const {itemCount,setItemCount} = React.useContext(CartContext);
  
  const handleAddCart = () => {
    setItemCount(itemCount + quantity);
    handleResetQuantity();
  }

  return (
    <button onClick={handleAddCart} style={{marginTop: 20, backgroundColor: 'black', borderRadius: 20}}>{label}</button>
  )
}
