import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";
import { CartContext } from "../contexts/CartContext";

const ItemDetail = ({ item }) => {
  const { title, price, stock, pictureUrl, description } = item;
  const { setCartItems } = useContext(CartContext);
  const [amount, setAmount] = useState(0);

  const { addItem } = useContext(CartContext);

  const onAdd = (amount) => {
    setAmount(amount); 
    setCartItems((prevState) => [...prevState, { item, quantity: amount }]);
    addItem(item, amount);
  };

  return (
    <div className="card" style={{ width: "20rem" }}>
      <img className="card-img-top" src={pictureUrl} alt="Card cap" />
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{`${stock} Unidades Disponibles!`}</p>
        <p className="card-text">{`Precio: $${price}`}</p>
        <h6 className="card-text">{`${description}`}</h6>
        <h7>¡Quedan {item.stock} unidades!</h7>
        {amount === 0 ? (
          <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
        ) : (
          <Link to="/cart/">
            <button className="btn btn-success">Comprar</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;


