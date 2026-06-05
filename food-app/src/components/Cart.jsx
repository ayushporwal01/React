import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import { clearCart } from "../utils/cartSlice";

export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="mt-8 flex flex-col items-center">
      <h1 className="text-2xl text-center font-bold">Cart</h1>
      <div className="w-6/12 mx-auto">
        {cartItems.map((item, index) => (
          <Item index={index} item={item} />
        ))}
      </div>

      {(cartItems.length > 0) ? (
        <button
          className="w-30 h-10 bg-black text-white text-xl rounded-md mb-10 cursor-pointer"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      ) : <p className="text-xl font-semibold mt-50 text-gray-500">Your cart looks empty, add some delicious food to your cart.</p>}
    </div>
  );
}
