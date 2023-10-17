import { useEffect, useState } from "react";
import { RESTAURANTS_LIST } from "./../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurantsList();
  }, []);

  const fetchRestaurantsList = async () => {
    const response = await fetch(RESTAURANTS_LIST);
    const responseJson = await response.json();
    setRestaurants(
      responseJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        .restaurants
    );
  };

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap justify-center">
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
      ))}
    </div>
  );
};

export default Restaurants;
