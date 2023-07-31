/** @jest-environment jsdom */
import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe("Pruebas en useCounter", () => {
  test("Debe de retornar los valores por defecto", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decremento, incremento, reset } = result.current;

    expect(counter).toBe(10);
    //Evaluamos que nos devuelva una funcion
    expect(decremento).toEqual(expect.any(Function));
    expect(incremento).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("Debe de generar el counter con el valor de 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;
    expect(counter).toBe(100);
  });

  test("Debe de incrementar el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { incremento } = result.current;

    act(() => {
      incremento();
      incremento(4);
    });

    expect(result.current.counter).toBe(105);
  });

  test("Debe de decrementar el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decremento } = result.current;

    act(() => {
      decremento();
      decremento(4);
    });

    expect(result.current.counter).toBe(95);
  });

  test("Debe de resetear el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decremento, reset } = result.current;

    act(() => {
      decremento();
      reset();
    });

    expect(result.current.counter).toBe(100);
  });
});
