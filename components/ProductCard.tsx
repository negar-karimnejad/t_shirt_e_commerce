"use client";

import AddToCart from "@/app/(shoppingcart)/components/ui/AddToCart";
import { ProductTypes } from "@/types/ProductTypes";
import { formatCurrency } from "@/utilities/formatCurrency";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { FaHeartCirclePlus } from "react-icons/fa6";

function ProductCard({ product }: { product: ProductTypes }) {
  const [selectedSize, setSelectedSize] = useState("");
  const isSizeSelected = selectedSize !== "";

  const showToast = () => {
    toast.error("Please choose a size first!");
  };

  return (
    <div className="relative group text-gray-500 flex flex-col gap-2 items-center justify-center">
      <Image
        src={product.image}
        alt={`Image of ${product.name}`}
        width={300}
        height={300}
        className="cursor-pointer"
      />
      <div className="hidden group-hover:flex text-white flex-col gap-3 absolute top-5 left-3">
        <button className="bg-black p-2 rounded-md cursor-pointer hover:bg-gray-900/75">
          <FaHeartCirclePlus />
        </button>
        <button className="bg-black p-2 rounded-md cursor-pointer hover:bg-gray-900/75">
          <FaEye />
        </button>
      </div>
      <h3 className="font-bold text-gray-900 tracking-wide">{product.name}</h3>
      <p>{formatCurrency(product.unit_amount)}</p>
      <select
        value={selectedSize}
        onChange={(e) => setSelectedSize(e.target.value)}
        name=""
        id=""
        className="border rounded-md p-2"
      >
        <option value="">Select Size</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
      <AddToCart
        name={product.name}
        image={product.image}
        price={product.unit_amount}
        id={product.price_id!}
        sizeSelect={isSizeSelected}
        size={selectedSize}
        onClick={!isSizeSelected ? showToast : undefined}
        currency="USD"
      />
    </div>
  );
}

export default ProductCard;
