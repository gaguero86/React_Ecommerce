import { useContext } from "react";
import { GContext } from "./contexts/CartContext";




const CartWidget = ({}) => {
    const {cartItems} = useContext(GContext);
    /* const amount = 3; */
    return (
        <>
        {cartItems.length === 0? ( 
        <></>
        ) : (

        <img style={{width: 30}} src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvgK4DibycwaiYTXo96bPuPUi9V4gFRoKAJw&usqp=CAU"/>)} 
        
        {/* {amount} */}
        </> 
        
     );
}
 
export default CartWidget;