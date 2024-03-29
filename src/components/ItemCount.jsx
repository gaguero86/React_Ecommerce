import { useState } from "react";

const ItemCount = ({ stock, initial = 0, onAdd }) => {
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
          value={count}
          type="number"

        />
        <button
          onClick={handleSustract}
          type="button"
          className="btn btn-primary"
        >
          -
        </button>
        <button onClick={handleAdd} type="button" className="btn btn-primary">
          +
        </button>
      </div>

      <div>
        <button
          disabled={count === "" || count === 0}
          type= "button"
          onClick={() => onAdd(count)}
          className="btn btn-primary"
        >
          Agregar al carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;

