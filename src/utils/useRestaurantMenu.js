import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      `https://corsproxy.io/?https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`,
    );

    const json = await data.json();
    setresInfo(json.data);
    console.log(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
