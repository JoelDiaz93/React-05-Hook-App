import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, incremento, decremento, reset } = useCounter();
  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => incremento(2)}>
        +
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => decremento(3)}>
        -
      </button>
    </>
  );
};
