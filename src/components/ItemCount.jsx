import { useState } from "react";

const ItemCount = ({ stock = 2, initial = 0, onAdd }) => {
  const [count, setCount] = useState(initial);
  const updateCount = (operacion) => {
    if (operacion === "-" && count > 0) {
      setCount(count - 1);
    }
    if (operacion === "+" && count < stock) {
      setCount(count + 1);
    }
  };
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
          onChange={(e) => updateCountInput(e)}
          placeholder=""
          value={count}
          type="number"
        />
        <button onClick={() => updateCount("-")} type="button">
          -
        </button>
        <button onClick={() => updateCount("+")} type="button">
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
