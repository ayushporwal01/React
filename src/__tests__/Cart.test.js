import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../components/RestaurantMenu";
import { act } from "react";
import fetchMock from "../mocks/fetchMock";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../components/Cart";

beforeEach(() => fetchMock(MOCK_DATA));

const setup = () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
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
it("Should expand accordion and display menu items on click", async () => {
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

  const cartItemText = screen.getByText("Cart (1)");

  expect(cartItemText).toBeInTheDocument();
});
it("Should add items to cart and reflect those items on cart page", async () => {
  setup();

  const accordionHeader = await screen.findByText("Recommended (17)");

  fireEvent.click(accordionHeader);

  const menuItems = await screen.findAllByTestId("menu-item");

  expect(menuItems).toHaveLength(17);

  const addBtn = screen.getAllByRole("button", { name: "Add" });

  fireEvent.click(addBtn[0]);

  const cartItems = await screen.findAllByTestId("cart-items");

  expect(cartItems).toHaveLength(2);
});

