import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

export const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);

  if (restaurant === []) return <Shimmer />;

  // const { costForTwoMessage } =
  //   restaurant?.cards[0]?.card?.card?.info;
  // console.log(
  //   restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
  //     .card
  // );
  const itemCards =
    restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card.itemCards;

  // restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
  //   ?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <div>
        <h1>Restaurant id: {resId}</h1>
        <h2>{restaurant?.cards[0]?.card?.card?.info.name}</h2>
        <h3>
          {restaurant?.cards[0]?.card?.card?.info.cuisines.join(", ")} -{" "}
          {restaurant?.cards[0]?.card?.card?.info.costForTwoMessage}
        </h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {itemCards?.map((item) => {
            console.log(item?.card.info.name);
            return (
              <li key={item.card.info.id}>
                {item.card.info.name} - {"RS."}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}{" "}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
