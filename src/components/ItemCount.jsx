import { useState } from "react";
import { Button } from "bootstrap";
import { Link } from "react-router-dom";

const ItemCount = ({ stock = 2, initial = 0, onAdd }) => {
  const [count, setCount] = useState(initial);

  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }

  function handleSustract() {
    if (count !== initial) setCount(count - 1);
  }

  const updateCountInput = (e) => {
    const { value } = e.target;
    if (value <= stock) {
      setCount(isNaN(value) ? 0 : parseInt(value));
    }
  };

  return (
    <>
      <div>
        <input
          onChange={updateCountInput}
          min="1"
          max={stock}
          /*  min={initial} */
          value={count}
          type="number"
        />
        <button onClick={handleSustract} type="button">
          -
        </button>
        <button onClick={handleAdd} type="button">
          +
        </button> 
      </div>

      <div>
        <Link to={`/cart`} style={{ textDecoration: "none" }}>
          <Button
            disabled={count === "" || count === 0}
            onClick={onAdd(count)}
            className="cartButton btnContainer btn-dark"
          >
            Agregar al carrito
          </Button>
        </Link>
      </div>
    </>
  );
};

export default ItemCount;
