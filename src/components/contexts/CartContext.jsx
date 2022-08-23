import React, { createContext, useState } from "react";
import {
  addDoc,
  collection,
  getFirestore,
  updateDoc,
  doc,
  writeBatch,
} from "firebase/firestore";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  ///
  const sendOrder = (totalPrice, buyerData) => {
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    const order = {
      items: cartItems,
      total: totalPrice,
      buyer: buyerData,
    };
    addDoc(orderCollection, order)
      .then((res) => console.log(res.id))
      .catch((err) => console.log("error", err));
  };
/////

  const addItem = (item, quantity) => {
    const cartItem = isInCart(item);
    console.log ("Primer prueba",item, "cantidad",quantity, "New Item",cartItem);
    if (cartItem) {
      quantity = quantity + cartItem.quantity;
      setCartItems(
        cartItems.splice(
          cartItems.findIndex((Element) => Element.item.id === item.id),
          1
        )
      );
    }
    setCartItems([...cartItems, { item, quantity }]);
    console.log (cartItems);
  };

  const isInCart = (item) => {
    return cartItems.find((Element) => Element.item.id === item.id); //aca agarra cada elemento del item y comparalos
  };
  const clear = () => {
    setCartItems([]);
  };
  const removeItem = (itemId) => {
    setCartItems(cartItems.filter((Element) => Element.item.id !== itemId));
  };

  const total = () => {
    return cartItems.reduce(
      (valorAnterior, valorActual) =>
        valorAnterior + valorActual.item.price * valorActual.quantity,
      0
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, sendOrder, addItem, removeItem, clear, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
