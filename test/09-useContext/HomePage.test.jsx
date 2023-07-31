/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/userContext";

describe("Prueba en <HomePage/>", () => {
  const user = {
    id: 1,
    name: "Joel",
  };

  test("Debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    const pretag = screen.getByLabelText("pre");
    expect(pretag.innerHTML).toBe("null");
  });

  test("Debe de mostrar el componente con el usuario", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );

    const pretag = screen.getByLabelText("pre");
    expect(pretag.innerHTML).toContain(user.name);
    expect(pretag.innerHTML).toContain(`${user.id}`);
  });
});
