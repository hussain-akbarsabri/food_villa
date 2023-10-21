import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return <p className="text-2xl mr-20">Cart - {cartItems.length} items</p>;
};

export default Cart;
