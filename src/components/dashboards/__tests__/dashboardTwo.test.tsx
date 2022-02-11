import React from "react";
import { render, screen } from "@testing-library/react";
import DashboardTwoComponent from "../dashboardTwo";

test("Component renders with correct UI", () => {
  render(<DashboardTwoComponent />);
  const heading = screen.getByText(/Welcome to Dashboard Two!/i);
  expect(heading).toBeInTheDocument();
});

test("Component renders with correct UI", () => {
  render(<DashboardTwoComponent />);
  const userAccess = screen.getByRole('access');
  expect(userAccess).toHaveTextContent('Private Access!');
  expect(userAccess).toHaveAttribute('role', 'access');
});

