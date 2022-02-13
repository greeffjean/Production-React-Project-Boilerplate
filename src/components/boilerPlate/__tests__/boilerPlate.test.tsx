import React from "react";
import { render, screen, fireEvent, cleanup, waitFor } from "@testing-library/react";
import BoilerPlateComponent from "../boilerPlate.component";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/store";


beforeAll(() => cleanup())

describe("Tests for component", () => {
  const history = createMemoryHistory();

  test("Component renders with correct UI", () => {
    render(
      <Router history={history}>
        <Provider store={store}>
        <BoilerPlateComponent />
        </Provider>
      </Router>
    );

    const heading = screen.getByText(/Welcome to BoilerPlate!/i);
    expect(heading).toBeInTheDocument();
  });

  test("Component state updates correctly", () => {
    render(
      <Router history={history}>
        <Provider store={store}>
        <BoilerPlateComponent />
        </Provider>
      </Router>
    );
    const incrementCountButton = screen.getByRole("incrementCount");
    const displayCount = screen.getByRole("displayCount");
    fireEvent.click(incrementCountButton);
    expect(displayCount).toHaveTextContent('Try Me! The count is 1');
  });

  test("Component updateIncome event-listener works correctly", async () => {
    render(
      <Router history={history}>
        <Provider store={store}>
        <BoilerPlateComponent />
        </Provider>
      </Router>
    );
    const updateIncomeBtn = screen.getByRole("updateIncome");
    const nettDescription = screen.getByRole("yourNett");
    fireEvent.click(updateIncomeBtn)
    expect(nettDescription).toHaveTextContent("Your income is 114000.5");
  });
});
