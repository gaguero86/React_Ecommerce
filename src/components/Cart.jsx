import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./contexts/CartContext";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartItems, sendOrder, updateOrder, multipleUpdates } =
    useContext(CartContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputs = document.getElementsByTagName("input");
    console.log(inputs[0]);
    const data = Array.from(inputs).map((input, index) => input.value);
    sendOrder(totalPrice, { name: data[0], mail: data[1], phone: data[2] });
    updateOrder();
    multipleUpdates();
  };
  useEffect(() => {
    let total = 0;
    cartItems.forEach(({ item, quantity }) => {
      total += parseInt(item.price) * quantity;
    });
    setTotalPrice(total);
  }, [cartItems]);
  return (
    <>
      <ul>
        {cartItems.map(({ item, quantity }) => (
          <>
            <div key={item.id} className="card" style={{ width: "20rem" }}>
              <img
                className="card-img-top"
                src={item.pictureUrl}
                alt="Card image cap"
              />
              <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{`${item.stock} unidades disponibles!`}</p>
               
              </div>
            </div>
          </>
        ))}
      </ul>
          <ul>
          <h5 className="card-title">{`Su Total es: $${totalPrice}`}</h5>
          </ul>
      <ul>
        <form onSubmit={handleSubmit}>
        <div className="card d-flex flex-column justify-content-center " style={{ width: "20rem" }}>
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Nombre
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese Nombre"
            aria-label="Ingrese Nombre"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              E-Mail
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese E-mail"
            aria-label="Ingrese E-mail"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Celular:
            </span>
          </div>
          <input
            type="number"
            className="form-control"
            placeholder="Código sin 0 y sin 15"
            aria-label="Código sin 0 y sin 15"
            aria-describedby="basic-addon1"
          />
        </div>
        <button
          onClick={() => sendOrder(totalPrice)}
          type="submit"
          className="btn btn-info"
        >
          Enviar pedido
        </button>
      </div>
      </form>
      </ul>
      
    </>
  );
};

export default Cart;


/* import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./contexts/CartContext";


const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartItems } = useContext(CartContext);
  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += parseInt(item.price);
    });
    setTotalPrice(total);
  }, [cartItems]);
  return (
    <>
      <ul>
        {cartItems.map((item) => (
          <>
            <li>{item.title}</li>
            <li>{item.price}</li>
          </>
        ))}
      </ul>
      <h1 className="bg-primary">{`El Total es: $${totalPrice}`}</h1>
    </>
  );
};

export default Cart;
 */