import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

export const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9121181&lng=77.6445548&restaurantId=548400&submitAction=ENTER"
    );
    const json = await data.json();

    console.log(json);
    setMenuData(json);
  };

  if (menuData === []) return <Shimmer />;

  return (
    <div className="menu">
      <h1>Name os Restaurent</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Khichadi</li>
      </ul>
    </div>
  );
};
