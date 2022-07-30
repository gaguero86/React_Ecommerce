
import { useState, useContext} from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";
import { CartContext } from "../../contexts/CartContext";
import { Button } from "bootstrap";

const ItemDetail = ({ item }) => {
  const { title, price, stock, pictureUrl, id } = item;
  const [amount, setAmount] = useState(0);
  const onAdd = (amount) => {
    setAmount(amount);
    
  };
  return (
    <div className="card" style={{ width: "15rem" }}>
      <img className="card-img-top" src={pictureUrl} alt="Card image cap" />
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{`${stock} units available!`}</p>
        <h6>Solicita tu producto personalizado</h6>
        <h7>¡Quedan {item.stock} unidades!</h7>
        <ItemCount items={item} initial={0} onAdd={onAdd}/>
        <Link to="/cart/">
          <button className="btn btn-primary">Comprar</button>
        </Link>
      </div>
    </div>
  );
};

/* const ItemDetail = ({ item }) => {
  const { setCartItems } = useContext(CartContext);
  const [amount, setAmount] = useState(0);
  const { title, price, stock, pictureUrl, id, discount } = item;
  const onAdd = (amount) => {
    setAmount(amount);
    setCartItems((prevState) => [...prevState, item]);
  };
  return (
    <div className="card" style={{ width: "20rem" }}>
      <img className="card-img-top" src={pictureUrl} alt="Card image cap" />
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{`${stock} units available!`}</p>
        <p className="card-text">{`$${
          (price * discount) / 100
        } | with a ${discount}% discount!`}</p>
      </div>
      {amount == 0 ? (
        <ItemCount stock={stock} initial={0} onAdd={onAdd} />
      ) : (
        <h1>{amount} items will be buy</h1>
        )}
      <div className="d-flex justify-content-center my-3">
        <Link to="/cart/">
          <button className="btn btn-warning">Go to checkout</button>
        </Link>
      </div>
    </div>
  );

}; */

export default ItemDetail;

/* const ItemDetail = ({ item }) => {

  const [amount, setAmount] = useState(0);
  const { id, title, price, stock, pictureUrl } = item;
  const onAdd = (amount) => {
    setAmount(amount);
  }
  return (
    <div className="card" style={{ width: "20rem" }}>
      <img className="card-img-top" src={pictureUrl} alt="Card image cap" />
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{`${stock} units available!`}</p>
      </div>
      {amount==0 ?(<ItemCount stock={stock} initial={0} onAdd={onAdd}/> ): (
        <h1>{amount} Item comprado </h1>
      ) }
      <Link to="cart/"><button>Ir a compra </button></Link>
    </div>
  );
};

export default ItemDetail; */