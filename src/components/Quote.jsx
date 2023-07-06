import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ species, status, name }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
    return () => {};
  }, [name]);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p className="mb-1" ref={pRef}>
          {species} - {status}
        </p>
        <footer className="blockquote-footer mt-1">{name}</footer>
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
