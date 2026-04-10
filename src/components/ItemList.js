import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-4 border-gray-200 border-b-2 text-left flex justify-between items-center"
        >
          <div className="w-9/12">
            <span className="font-semibold">{item?.card?.info?.name}</span>
            <span>
              {" "}
              - ₹{" "}
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </span>
            <p className="text-xs py-2">{item?.card?.info?.description}</p>
          </div>

          {/* ✅ relative parent */}
          <div className="w-3/12 p-4 relative">
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="w-full rounded-lg"
            />

            <button className="absolute bottom-4 left-1/2 -translate-y-2/2 p-1 px-3 rounded-lg bg-black text-white shadow-lg text-sm">
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
