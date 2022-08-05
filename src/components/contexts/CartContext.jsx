import React, { createContext, useState } from "react";


export const GContext = createContext();

const CartContext = ({children}) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem=(item,quantity)=>{
    const newItem = isInCart(item);
    if (newItem) {
      quantity = quantity + newItem.quantity;
      setCartItems(
        cartItems.splice(
          cartItems.findIndex((Element)=>Element.item.id === item.id),
          1));
    }
    setCartItems ([...cartItems, {item, quantity}]);
  };
  console.log(addItem);

  const isInCart =(item)=>{
    cartItems.find(Element=>Element.item === item); //aca agarra cada elemento del item y comparalos

  };
  const clear =()=>{
    setCartItems ([])
  }; 
  const removeItem =(itemId)=>{
    setCartItems(cartItems.filter((Element)=>Element.item.id !== itemId));
  }; 

  const total = () => {
    return cartItems.reduce(
      (valorAnterior, valorActual) => valorAnterior + valorActual.item.price * valorActual.quantity, 0
    );
  };
  return (  
    <GContext.Provider value={{ cartItems, addItem, removeItem, clear, total}}>{children}</GContext.Provider>
    );
};

export default CartContext;