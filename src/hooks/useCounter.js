import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const incremento = (valor = 1) => {
    setCounter(counter + valor);
  };

  const decremento = (valor = 1) => {
    if (counter === 0) return;
    setCounter(counter - valor);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    incremento,
    decremento,
    reset,
  };
};
