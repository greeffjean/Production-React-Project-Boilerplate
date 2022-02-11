import React from "react";
import { render, screen, fireEvent, cleanup, waitFor } from "@testing-library/react";
import BoilerPlateComponent from "../boilerPlate.component";

beforeAll(() => cleanup())

describe("Tests for component", () => {

  test("Component renders with correct UI", () => {
    render(<BoilerPlateComponent />);
    const heading = screen.getByText(/Welcome to BoilerPlate!/i);
    expect(heading).toBeInTheDocument();
  });

  test("Component state updates correctly", () => {
    render(<BoilerPlateComponent />);
    const incrementCountButton = screen.getByRole("incrementCount");
    const displayCount = screen.getByRole("displayCount");
    fireEvent.click(incrementCountButton);
    expect(displayCount).toHaveTextContent('Try Me! The count is 1');
  });

  test("Component updateIncome event-listener works correctly", async () => {
    render(<BoilerPlateComponent />);
    const updateIncomeBtn = screen.getByRole("updateIncome");
    const nettDescription = screen.getByRole("yourNett");
    fireEvent.click(updateIncomeBtn)
    expect(nettDescription).toHaveTextContent("Your income is 114000.5");
  });
});
