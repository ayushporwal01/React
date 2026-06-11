import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import PromotedLabel from "../components/PromotedLabel";

it("Should render RestaurantCard with Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Pizza Hut");

  expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard component with PromotedLabel", () => {
  const RestaurantCardPromoted = PromotedLabel(RestaurantCard);

  render(<RestaurantCardPromoted resData={MOCK_DATA} />)

  const label = screen.getByText("Promoted");
  
  expect(label).toBeInTheDocument();
})
