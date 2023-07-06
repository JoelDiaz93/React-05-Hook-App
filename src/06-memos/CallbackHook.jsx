import { useCallback, useState } from "react";
import { useCounter } from "../hooks";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback((i) => {
    setCounter((value) => value + i);
  }, []);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>UseCallback Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </>
  );
};
