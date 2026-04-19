export default function Body() {
    return <div className="body">
        <div className="searchContainer">
            <input className="searchBar" type="text" placeholder="Enter a Restaurant Name..." />
            <button className="searchBtn"></button>
        </div>
        <div className="ResContainer">
            <RestaurantCards/>
        </div>
    </div>
}