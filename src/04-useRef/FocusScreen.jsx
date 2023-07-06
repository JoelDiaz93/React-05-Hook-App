import React, { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClic = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus screen</h1>
      <hr />
      <input
        ref={inputRef}
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />

      <button onClick={onClic} className="btn btn-primary mt-3">
        Set Focus
      </button>
    </>
  );
};
