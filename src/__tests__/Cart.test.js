import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../components/RestaurantMenu";
import { act } from "react";
import fetchMock from "../mocks/fetchMock";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../components/Cart";
import { createTestStore } from "../utils/createTestStore";

beforeEach(() => fetchMock(MOCK_DATA));

const setup = () => {
  const store = createTestStore(); // new store each time

  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
        <Cart />
      </Provider>
    </BrowserRouter>,
  );
};

it("Should render all restaurant menu categories", async () => {
  setup();

  const categories = await screen.findAllByTestId("category");

  expect(categories).toHaveLength(11);
});
it("Should expand accordion and show menu items on click", async () => {
  setup();

  const accordionHeader = await screen.findByText("Recommended (17)");

  fireEvent.click(accordionHeader);

  const menuItems = await screen.findAllByTestId("menu-item");

  expect(menuItems).toHaveLength(17);
});
it("Should add item to cart when add button is clicked and update item count in ui", async () => {
  setup();

  const accordionHeader = await screen.findByText("Recommended (17)");

  fireEvent.click(accordionHeader);

  const menuItems = await screen.findAllByTestId("menu-item");

  expect(menuItems).toHaveLength(17);

  const addBtn = screen.getAllByRole("button", { name: "Add" });

  fireEvent.click(addBtn[0]);

  fireEvent.click(addBtn[1]);

  const cartItemText = screen.getByText("Cart (2)");

  expect(cartItemText).toBeInTheDocument();
});
it("Should add items to cart and reflect those items on cart page", async () => {
  setup();

  const accordionHeader = await screen.findByText("Recommended (17)");

  fireEvent.click(accordionHeader);

  const addBtn = screen.getAllByRole("button", { name: "Add" });

  fireEvent.click(addBtn[0]);

  fireEvent.click(addBtn[1]);

  const cartItems = await screen.findAllByTestId("cart-items");

  expect(cartItems).toHaveLength(2);
});
it("Should clear cart and show empty cart message", async () => {
  setup();

  const accordionHeader = await screen.findByText("Recommended (17)");

  fireEvent.click(accordionHeader);

  const addBtn = screen.getAllByRole("button", { name: "Add" });

  fireEvent.click(addBtn[0]);

  fireEvent.click(addBtn[1]);

  const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });

  fireEvent.click(clearCartBtn);

  expect(
    screen.getByText(
      "Your cart looks empty, add some delicious food to your cart.",
    ),
  ).toBeInTheDocument();
});
