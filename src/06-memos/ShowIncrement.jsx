import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
  console.log("Me dibuje :P");
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        //el valor del incremento se lo pasa al callback
        increment(5);
      }}
    >
      Incrementar
    </button>
  );
});
