import { useContext } from "react";
import { CartContext } from "./contexts/CartContext";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const CartWidget = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="ps-4">
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="ps-2">{cartItems.length}</span>
    </div>
  );
};

export default CartWidget;



