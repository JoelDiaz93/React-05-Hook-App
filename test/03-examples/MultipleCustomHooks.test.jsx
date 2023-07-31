/** @jest-environment jsdom */
import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("Prueb en <MultipleCustomHooks/>", () => {
  const mockIncremento = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    incremento: mockIncremento,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Debe de mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByText("Multiple custom hooks"));
    expect(screen.getByText("Loading...."));

    const nextButton = screen.getByRole("button", { name: "Next" });
    expect(nextButton.disabled).toBeTruthy();

    // screen.debug();
  });

  test("Debe de demostrar un Quote", () => {
    useFetch.mockReturnValue({
      data: [{ name: "Joel", species: "Hola mundo", status: "live" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    // screen.debug();
    expect(screen.getByText("Hola mundo - live")).toBeTruthy();
    expect(screen.getByText("Joel")).toBeTruthy();

    const nextButton = screen.getByRole("button", { name: "Next" });
    expect(nextButton.disabled).toBeFalsy();
  });

  test("Debe de llamar la funcion incrementar", () => {
    useFetch.mockReturnValue({
      data: [{ name: "Joel", species: "Hola mundo", status: "live" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button", { name: "Next" });
    fireEvent.click(nextButton);

    expect(mockIncremento).toHaveBeenCalled();
  });
});
