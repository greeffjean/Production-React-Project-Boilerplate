import React from "react";
import { render, screen } from "@testing-library/react";
import DashboardOneComponent from "../dashboardOne";

test("Component renders with correct UI", () => {
  render(<DashboardOneComponent />);
  const heading = screen.getByText(/Welcome to Dashboard One!/i);
  expect(heading).toBeInTheDocument();
});

test("Component renders with correct UI", () => {
  render(<DashboardOneComponent />);
  const userAccess = screen.getByRole('access');
  expect(userAccess).toHaveTextContent('Public Access!');
  expect(userAccess).toHaveAttribute('role', 'access');
});
