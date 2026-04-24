import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

export default function RestaurantMenu() {
  useEffect(() => {
    fetchMenu();
  }, []);

  const [resInfo, setResInfo] = useState(null);

  async function fetchMenu() {
    const data = await fetch("");
    const json = await data.json();

    setResInfo();
  }

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div>
      <h1>Restaurant Name</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Pizza</li>
        <li>Pasta</li>
        <li>Paneer Tikka</li>
        <li>Chhole Bhature</li>
      </ul>
    </div>
  );
}
