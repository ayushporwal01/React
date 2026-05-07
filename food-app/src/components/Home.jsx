import { API_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import ItemFilter from "./ItemFilter";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import SideBar from "./SideBar";

export default function Home() {
  const [error, setError] = useState(null);
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setLoading(true);
      setError(null);

      const data = await fetch(API_URL);

      const json = await data.json();

      const restaurants =
        json?.data?.cards
          ?.map((c) => c?.card?.card)
          ?.find((c) => c?.gridElements?.infoWithStyle?.restaurants)
          ?.gridElements?.infoWithStyle?.restaurants ?? [];

      const processedList = (restaurants ?? []).map((res) => ({
        ...res,
        price: parseInt(res?.info?.costForTwo?.replace(/\D/g, "") || "0"),
      }));

      setListOfRestaurant(processedList);
      setFilteredRestaurant(processedList);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h2>
        Looks like you're offline!! Please check your internet connection.
      </h2>
    );
  }

  return (
    <div className="w-full flex flex-col items-center pt-15">
      <SearchBar
        listOfRestaurant={listOfRestaurant}
        setFilteredRestaurant={setFilteredRestaurant}
      />

      <div className="mt-18 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-fit">
          <ItemFilter
            listOfRestaurant={listOfRestaurant}
            setFilteredRestaurant={setFilteredRestaurant}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-10 pb-10 w-full max-w-7xl">
          {loading ? (
            Array(8)
              .fill("")
              .map((_, i) => <Shimmer key={i} className=" w-full max-w-7xl" />)
          ) : error ? (
            <h2>Error: {error}</h2>
          ) : filteredRestaurant.length === 0 ? (
            <p className="col-span-full flex justify-center items-center min-h-50 text-2xl font-semibold">
              No Restaurants Found
            </p>
          ) : (
            filteredRestaurant.map((res) => (
              <Link
                key={res?.info?.id}
                to={"/restaurants/" + res?.info?.id}
                className="block w-full h-full"
              >
                <RestaurantCard resData={res} />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
