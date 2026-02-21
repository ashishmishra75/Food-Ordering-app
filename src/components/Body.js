import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setlistOfReastaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4733386&lng=80.2976316&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();
    const cards = json?.data?.cards || [];

    const restaurantCard = cards.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );

    setlistOfReastaurants(
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        [],
    );
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
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
        {listOfRestaurants.map((restaurant) => (
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
