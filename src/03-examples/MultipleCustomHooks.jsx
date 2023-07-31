import { LoadingQuote, Quote } from "../components";
import { useCounter, useFetch } from "../hooks";

export const MultipleCustomHooks = () => {
  const { counter, incremento } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  // console.log(data, isLoading, hasError);
  const { name, species, status } = !!data && data[0];

  return (
    <>
      <h1>Multiple custom hooks</h1>
      <hr />

      {isLoading ? (
        <LoadingQuote />
      ) : (
        <Quote name={name} species={species} status={status} />
      )}

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => incremento(1)}
      >
        Next
      </button>
    </>
  );
};
