import { CDN_URL } from "../utils/contants";

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
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{Array.isArray(cuisines) ? cuisines.join(", ") : ""}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
