import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9121181&lng=77.6445548&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    );

    const json = await data.json();
    setListOfRestaurants(json?.data?.cards);
    setFilteredRestaurant(json?.data?.cards);
  };

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Offline! Please check your internet connection.</h1>;
  }

  if (!listOfRestaurants) return null;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchRestaurant}
            onChange={(e) => {
              setSearchRestaurant(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredList = listOfRestaurants.filter((restaurant) =>
                restaurant.data.data.name
                  .toLowerCase()
                  .includes(searchRestaurant.toLowerCase())
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let filteredList = listOfRestaurants.filter(
              (res) => res.data.data.avgRating > 4.2
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.data.data.id}
            to={"/restaurants/" + restaurant.data.data.id}
          >
            <RestaurantCard
              key={restaurant.data.data.id}
              resData={restaurant}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
