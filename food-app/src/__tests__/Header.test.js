import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import "@testing-library/jest-dom";

it("Should render Header Component with a login button", () => {
    render(<Header />);

    const loginButton = screen.getByRole("button", {name: "Login"});

    expect(loginButton).toBeInTheDocument();
})