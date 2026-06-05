import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import { clearCart } from "../utils/cartSlice";

const dispatch = useDispatch();

const handleClearCart = () => (
  dispatch(clearCart())
)

export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="mt-8 flex flex-col items-center">
      <h1 className="text-2xl text-center font-bold">Cart</h1>
      <div className="w-6/12 mx-auto">
        {cartItems.map((item, index) => (
          <Item index={index} item={item} />
        ))}
      </div>

      <button className="w-30 h-10 bg-black text-white text-xl rounded-md cursor-pointer" onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
}
