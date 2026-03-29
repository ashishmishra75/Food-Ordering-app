import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const info = resData?.info || resData || {};
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines = [],
    costForTwo,
    sla,
  } = info;

  return (
    <div className="bg-gray-100 p-4 m-2 w-[250px] rounded-lg hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-lg py-4 ">{name}</h3>
      <h4>{Array.isArray(cuisines) ? cuisines.join(", ") : ""}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
