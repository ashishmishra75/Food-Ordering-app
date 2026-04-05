// import { useParams } from "react-router-dom"; //
// import Shimmer from "./Shimmer";
// import useRestaurantMenu from "../utils/useRestaurantMenu";

// const RestaurantMenu = () => {
//   const { resId } = useParams(); //  URL se id
//   // aayegi automatically

//   const resInfo = useRestaurantMenu(resId);

//   if (resInfo === null) return <Shimmer />;

//   const resInfoCard = resInfo?.cards?.find((c) => c?.card?.card?.info);
//   const { name, cuisines, costForTwoMessage } =
//     resInfoCard?.card?.card?.info || {};

//   const menuCategories =
//     resInfo?.cards
//       ?.find((c) => c?.groupedCard?.cardGroupMap?.REGULAR)
//       ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) =>
//         c?.card?.card?.["@type"]?.includes("ItemCategory"),
//       ) || [];

//   return (
//     <div className="menu">
//       <h1>{name}</h1>
//       <p>
//         {cuisines?.join(", ")}, {costForTwoMessage}
//       </p>
//       <h3>Menu</h3>
//       <ul>
//         {menuCategories.map((category, index) => (
//           <div key={index}>
//             <h4>{category?.card?.card?.title}</h4>
//             {category?.card?.card?.itemCards?.map((item) => (
//               <li key={item?.card?.info?.id}>
//                 {item?.card?.info?.name} - Rs.{" "}
//                 {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
//                   100}
//               </li>
//             ))}
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RestaurantMenu;

//
//
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

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
      <ul>
        {menuCategories.map((category, index) => {
          const cat = category?.card?.card;
          const items = cat?.itemCards || [];
          const subCategories = cat?.categories || []; // ✅ nested categories

          return (
            <div key={index}>
              <h4>{cat?.title}</h4>

              {/* ✅ Normal items */}
              {items.map((item) => (
                <li key={item?.card?.info?.id}>
                  {item?.card?.info?.name} - Rs.{" "}
                  {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                    100}
                </li>
              ))}

              {/* ✅ Nested subcategories */}
              {subCategories.map((sub, subIndex) => (
                <div key={subIndex} style={{ marginLeft: "20px" }}>
                  <h5>{sub?.title}</h5>
                  {sub?.itemCards?.map((item) => (
                    <li key={item?.card?.info?.id}>
                      {item?.card?.info?.name} - Rs.{" "}
                      {(item?.card?.info?.price ||
                        item?.card?.info?.defaultPrice) / 100}
                    </li>
                  ))}
                </div>
              ))}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
