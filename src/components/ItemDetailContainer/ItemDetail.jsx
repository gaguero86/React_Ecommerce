/* import React from "react"
import ItemCount from "../ItemCount";
import Item from "../Item";

const ItemDetail = (props) => {
return (
  <div className="container">
  <div className="row">
    {Item.map((item) => (
      <div key={item.id} className="col-sm">
        <Item item={item} />
        <ItemCount stock={props.item.stock}/>
      </div>
    ))}
  </div>
</div>
);

};

export default ItemDetail */

import ItemCount from "../ItemCount";

const ItemDetail = ({ item }) => {
  const { title, price, stock, pictureUrl } = item;
  return (
    <div className="card" style={{ width: "15rem" }}>
      <img className="card-img-top" src={pictureUrl} alt="Card image cap" />
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{`${stock} units available!`}</p>
    <ItemCount/>
      </div>
    </div>
  );
};

export default ItemDetail;