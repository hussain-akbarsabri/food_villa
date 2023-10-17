import { useEffect, useState } from "react";
import { RESTAURANTS_LIST } from "./../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

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
    setFilteredRestaurants(
      responseJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        .restaurants
    );
  };

  const filterRestaurants = () => {
    const filterRestaurants = restaurants.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filterRestaurants);
  };

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <input
        type="text"
        className="my-5 w-96 border border-black rounded-md h-10 p-4 ml-5"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Seach Restaurants"
      />
      <button
        className="ml-2 border border-black p-2 bg-slate-200 rounded-md"
        onClick={filterRestaurants}
      >
        Search
      </button>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
