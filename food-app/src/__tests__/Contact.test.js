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
test("Should render 2 input boxes on the Contact Component", () => {
  render(<Contact />);

  //Querying
  const inputBoxes = screen.getAllByRole("textbox");

  //Assertion
  expect(inputBoxes).toBeInTheDocument();
});
