import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  return <h1>Restaurant Menu</h1>;
};

export default RestaurantMenu;
