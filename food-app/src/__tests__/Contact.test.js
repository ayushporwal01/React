import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

test("Should render heading on the Contact Component", () => {
  render(<Contact />);
    
  //Querying
  const heading = screen.getByRole("heading");

  //Assertion
  expect(heading).toBeInTheDocument();
});
test("Should render input name on the Contact Component", () => {
  render(<Contact />);

  //Querying
  const inputName = screen.getByPlaceholderText("name");

  //Assertion
  expect(inputName).toBeInTheDocument();
});
test("Should render 2 input boxes on the Contact Component", () => {
  render(<Contact />);

  //Querying
  const inputBoxes = screen.getAllByRole("textbox");

  //Assertion
  expect(inputBoxes.length).toBe(2);
});
test("Should render a button on the Contact Component", () => {
  render(<Contact />);

  //Querying
  const button = screen.getByText("Submit");

  //Assertion
  expect(button).toBeInTheDocument();
});
