import { useParams } from "react-router-dom"; //
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams(); //  URL se id
  // aayegi automatically

  const resInfo = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     //  resId dynamic hai - har restaurant ke liye kaam karega
  //     `https://corsproxy.io/?https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`,
  //   );
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json.data);
  // };

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
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines?.join(", ")}, {costForTwoMessage}
      </p>
      <h3>Menu</h3>
      <ul>
        {menuCategories.map((category, index) => (
          <div key={index}>
            <h4>{category?.card?.card?.title}</h4>
            {category?.card?.card?.itemCards?.map((item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name} - Rs.{" "}
                {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                  100}
              </li>
            ))}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
