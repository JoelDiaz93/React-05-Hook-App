/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodo } from "../../src/hooks/useTodo";

jest.mock("../../src/hooks/useTodo");

describe("Prueba en <TodoApp/>", () => {
  useTodo.mockReturnValue({
    todos: [
      { id: 1, description: "Todo 1", done: false },
      { id: 2, description: "Todo 2", done: false },
      { id: 3, description: "Todo 3", done: false },
    ],
    todosCount: 2,
    pendingTodosCount: 1,
    handleNewTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
  });

  test("Debe de mostrar correctamente el componente", () => {
    render(<TodoApp />);

    expect(screen.getAllByText("Todo 1")).toBeTruthy();
    expect(screen.getAllByText("Todo 2")).toBeTruthy();
    expect(screen.getAllByText("Todo 3")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();

  });
});
