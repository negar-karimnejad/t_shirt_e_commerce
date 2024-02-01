import { ProductTypes } from "@/types/ProductTypes";
import Image from "next/image";

function ProductCard({ product }: { product: ProductTypes }) {
  console.log(product);

  return (
    <div className="text-gray-500 flex flex-col gap-2 items-center justify-center">
      <Image src={product.image} alt={product.name} width={200} height={300} />
      <p className="font-bold text-gray-900">{product.name}</p>
      <p>{product.unit_amount}</p>
      <select name="" id="" className="border rounded-md p-1">
        <option value="-1">Select Size</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
      <button>Add to cart</button>
    </div>
  );
}

export default ProductCard;
