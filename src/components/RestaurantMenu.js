import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  const resInfoCard = resInfo?.cards?.find((c) => c?.card?.card?.info);
  const { name, cuisines, costForTwoMessage } =
    resInfoCard?.card?.card?.info || {};

  const menuCategories =
    resInfo?.cards
      ?.find((c) => c?.groupedCard?.cardGroupMap?.REGULAR)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) =>
        c?.card?.card?.["@type"]?.includes("ItemCategory"),
      ) || [];

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines?.join(", ")}, {costForTwoMessage}
      </p>
      <h3>Menu</h3>
      {menuCategories.map((category, index) => (
        <RestaurantCategory
          key={index}
          index={index}
          data={category?.card?.card}
          showItems={showIndex === index}
          setShowIndex={setShowIndex}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
