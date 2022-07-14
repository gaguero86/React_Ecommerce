import { useState } from "react";

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
        <button
          onClick={() => onAdd(count)}
          type="button"
          disabled={count === "" || count === 0}
        >
          Comprar
        </button>
      </div>
    </>
  );
};

export default ItemCount;