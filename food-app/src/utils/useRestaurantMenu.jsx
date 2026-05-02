import { MENU_URL } from "../utils/constants";
import { useState, useEffect } from "react";

export default function useRestaurantMenu(resId) {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();

    console.log(json);
    setResInfo(json?.data);
  }

  return resInfo;
}
