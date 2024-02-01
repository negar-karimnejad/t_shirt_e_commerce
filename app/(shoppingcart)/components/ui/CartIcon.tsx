import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useShoppingCart } from "use-shopping-cart";

function CartIcon() {
  const { cartDetails } = useShoppingCart();
  const cartItems = Object.values(cartDetails ?? {});

  return (
    <Link href="/cart" className="relative">
      <AiOutlineShoppingCart />
      {cartItems.length > 0 && (
        <span className="w-4 h-4 bg-gray-900 text-white text-sm font-bold rounded-full flex items-center justify-center absolute bottom-3 left-3">
          {cartItems.length}
        </span>
      )}
    </Link>
  );
}

export default CartIcon;
