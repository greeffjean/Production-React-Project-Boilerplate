
import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from "@testing-library/react";
import LoginComponent from '../login';


test('Renders correctly', () => {
    const tree = renderer.create(<LoginComponent greeting={'Jean'} />).toJSON()
    expect(tree).toMatchSnapshot();
})

test("Component renders with correct UI", () => {
    render(<LoginComponent greeting={'Jean'} />);
    const userGreeting = screen.getByRole('userGreeting');
    expect(userGreeting).toHaveTextContent('Jean');
    expect(userGreeting).toHaveAttribute('role', 'userGreeting');
  });

