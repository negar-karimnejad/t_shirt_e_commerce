import toast from "react-hot-toast";
import { useShoppingCart } from "use-shopping-cart";
import { Product } from "use-shopping-cart/core";

function AddToCart({
  currency,
  name,
  price,
  image,
  id,
  size,
  sizeSelect,
  onClick,
}: Product & {
  onClick?: () => void;
}) {
  const { addItem } = useShoppingCart();
  const productId = `${id}-${size}`;
  const product = {
    currency: currency,
    name: name,
    image: image,
    price: price,
    id: productId,
    size: size,
  };

  return (
    <button
      onClick={() => {
        if (!sizeSelect && onClick) {
          onClick();
        } else {
          addItem(product as any);
          toast.success(`${name} has been added to cart`);
        }
      }}
    >
      Add To Cart
    </button>
  );
}

export default AddToCart;
