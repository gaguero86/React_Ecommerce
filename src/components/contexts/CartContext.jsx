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
    const newItem = isInCart(item);
    if (newItem) {
      quantity = quantity + newItem.quantity;
      setCartItems(
        cartItems.splice(
          cartItems.findIndex((Element) => Element.item.id === item.id),
          1
        )
      );
    }
    setCartItems([...cartItems, { item, quantity }]);
  };
  console.log(addItem);

  const isInCart = (item) => {
    cartItems.find((Element) => Element.item === item); //aca agarra cada elemento del item y comparalos
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
