import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // local state variables - Super Powerful variables
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  // whenever State variable update - React triggers a reconciliation cycle and updates the UI with the new data / re render the componants.
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      );

      const json = await data.json();
      console.log("Full API Response:", json);

      const cards = json?.data?.cards || [];

      const restaurantCard = cards.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
      );

      const restaurants =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        [];

      console.log("Restaurants:", restaurants);

      setListOfRestaurants(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.error("Fetch failed:", error);
    }
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filtered = listOfRestaurants.filter(
              (res) => Number(res?.info?.avgRating) > 4,
            );
            setFilteredRestaurant(filtered); //  mutating listOfRestaurants
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
