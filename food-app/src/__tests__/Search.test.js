import { render, screen } from "@testing-library/react";
import Home from "../components/Home";
import fetchMock from "../mocks/fetchMock";
import MOCK_DATA from "../mocks/mockResListData.json";
import "@testing-library/jest-dom";
import { act } from "react";

fetchMock(MOCK_DATA);

it("Should render Home Component with Search", async () => {
  await act(async () => render(<Home />));

  const searchBtn = screen.getByLabelText(/search/i);

  expect(searchBtn).toBeInTheDocument();
});

it("Should render ", async () => {
  await act(async () => render(<Home />));

  const searchBtn = screen.getByLabelText(/search/i);

  expect(searchBtn).toBeInTheDocument();
});
