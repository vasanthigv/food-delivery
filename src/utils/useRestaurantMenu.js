import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();

    setResInfo(json?.data);
    setIsLoaded(true);
  };
  console.log("resInfo", resInfo);

  return [resInfo, isLoaded];
};

export default useRestaurantMenu;
