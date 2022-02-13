import React from "react";
import { Router } from "react-router-dom";
import renderer from "react-test-renderer";
import Navigation from "../navigation.component";
import { Provider } from "react-redux";
import store from "../../../../redux/store";
import { createMemoryHistory } from "history";
import {
  screen,
  waitFor,
  within,
  render,
  cleanup,
} from "@testing-library/react";

beforeAll(() => cleanup());

describe("Navigation tests", () => {
  const history = createMemoryHistory();

  const tree = renderer
    .create(
      <Router history={history}>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </Router>
    )
    .toJSON();

  test("Matches snapshot", () => {
    expect(tree).toMatchSnapshot();
  });

  test("Contain correct amount of allowed routes", async () => {
    render(
      <Router history={history}>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </Router>
    );

    const links = await waitFor(() => document.getElementsByTagName("a"));

    expect(links.length).toEqual(3);
  });
});
