import React, { useMemo, useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Ahi estamos....");
  }

  return `${iterationNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { counter, incremento } = useCounter(4000);
  const [show, setShow] = useState(false);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />
      <h4>{memorizedValue}</h4>
      <button className="btn btn-primary" onClick={() => incremento()}>
        +
      </button>
      <button className="btn btn-secondary" onClick={() => setShow(!show)}>
        Show/hide {JSON.stringify(show)}
      </button>
    </>
  );
};
