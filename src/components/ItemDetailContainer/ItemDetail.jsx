
import { useState} from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";

const ItemDetail = ({ item }) => {
  const [amount, setAmount] = useState(0);
  const { id, title, price, stock, pictureUrl } = item;
  const onAdd = (amount) => {setAmount(amount);}
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

export default ItemDetail;