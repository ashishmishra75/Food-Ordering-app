import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setlistOfReastaurants] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [filterdRestaurant, setFilterdRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4733386&lng=80.2976316&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();
    const cards = json?.data?.cards || [];

    const restaurantCard = cards.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );

    // Optional Chaining-
    setlistOfReastaurants(
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        [],
    );
    setFilterdRestaurant(
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        [],
    );
  };
  /*  Conditional Rendering- return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) :  we use ternary operator here */

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="seacrh">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // filter the res card and update the ui
              // searchText
              console.log(searchText);
              const filterdRestaurant = listOfRestaurants.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase()),
              );
              setFilterdRestaurant(filterdRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => {
              const info = res?.info || res;
              return Number(info?.avgRating) > 4;
            });
            setlistOfReastaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filterdRestaurant.map((restaurant) => (
          <RestaurantCard
            key={restaurant?.info?.id || restaurant?.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
