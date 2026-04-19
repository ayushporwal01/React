export default function Body() {
  return (
    <div className="body">
      <div className="searchContainer">
        <input
          className="searchBar"
          type="text"
          placeholder="Enter a Restaurant Name..."
        />
        <button className="searchBtn">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      {/* <div className="ResContainer">
            <RestaurantCards/>
        </div> */}
    </div>
  );
}
