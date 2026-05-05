import { useState } from "react";

export default function SearchBar({ listOfRestaurant, setFilteredRestaurant }) {
  const [searchText, setSearchText] = useState("");

  function searchFilter() {
    const filteredList = listOfRestaurant.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredRestaurant(filteredList);
  }
  return (
    <div className="w-110 h-12 flex relative">
      <input
        className="border border-r-0 border-[#afafaf] flex-1 pl-4 rounded-sm"
        type="text"
        value={searchText}
        placeholder="Enter a Restaurant Name..."
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            searchFilter();
          }
        }}
      />
      <button className="px-4 py-2.5 border border-l-0 border-[#afafaf] rounded-sm rounded-l-none absolute right-0 bottom-0 top-0 cursor-pointer" onClick={searchFilter}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}
