import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BoilerPlateComponent from "../boilerPlate.component";
import { rest } from 'msw'
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get('https://www.cheapshark.com/api/*', (req, res, ctx) => {
    return res(
      ctx.json('Test')
    )
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test("Component useEffect Hook works correctly and fetches data", async () => {
    render(<BoilerPlateComponent />);
    const dataEl = await waitFor(() => screen.getByRole("dataInfo"));
    expect(dataEl).toHaveTextContent("Test");
  });