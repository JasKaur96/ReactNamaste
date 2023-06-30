import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    console.log("data", data);
    const json = await data.json();
    console.log("json", json);
    setRestaurant(json.data);
  };

  //   console.log("restaurant", restaurant);
  return restaurant;
};

export default useRestaurant;
