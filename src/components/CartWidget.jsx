import { useContext } from "react";
import { GContext } from "./contexts/CartContext";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const CartWidget = () => {
    const { cartItems } = useContext(GContext);
    return (
      <div className="ps-4">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="ps-2">{cartItems.length}</span>
      </div>
    );
  };
  
  export default CartWidget;




/* 
const CartWidget = ({}) => {
    const {cartItems} = useContext(GContext);
    /* const amount = 3; */
    /* return (
        <>
        {cartItems.length === 0? ( 
        <></>
        ) : (

        <img style={{width: 30}} src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvgK4DibycwaiYTXo96bPuPUi9V4gFRoKAJw&usqp=CAU"/>)} 
         */
        {/* {amount} */}
     /*    </> 
        
     );
}
 
export default CartWidget;  */