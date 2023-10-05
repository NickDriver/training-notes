import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import DSL from "./DSL";

describe("Testing DSL", () => {
  it("Test if DSL has name DSL", () => {
    function dieselHandler() {

    }
    render(<DSL onDieselInput={dieselHandler} />);
    expect(screen.getByTestId("label-diesel")).toHaveTextContent(/^Diesel$/);
  })
})