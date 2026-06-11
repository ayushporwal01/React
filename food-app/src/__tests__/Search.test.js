import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "../components/Home";
import fetchMock from "../mocks/fetchMock";
import MOCK_DATA from "../mocks/mockResListData.json";
import "@testing-library/jest-dom";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

beforeEach(() => fetchMock(MOCK_DATA));

const setup = () =>
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
  );

it("Should render Home Component with Search", async () => {
  setup();

  const searchBtn = screen.getByTestId("searchBtn");

  expect(searchBtn).toBeInTheDocument();
});

it("Should Search ResList for pizza text input", async () => {
  setup();

  const cardsBeforeSearch = await screen.findAllByTestId("resCard");
  expect(cardsBeforeSearch).toHaveLength(20);

  const searchBtn = screen.getByTestId("searchBtn");
  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);

  const cardAfterSearch = screen.getAllByTestId("resCard");
  expect(cardAfterSearch).toHaveLength(2);
});
