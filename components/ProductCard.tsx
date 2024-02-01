"use client";

import { ProductTypes } from "@/types/ProductTypes";
import Image from "next/image";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { formatCurrency } from "@/utilities/formatCurrency";
import { useState } from "react";

function ProductCard({ product }: { product: ProductTypes }) {
  const [selectedSize, setSelectedSize] = useState("-1");
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
        <option value="-1">Select Size</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
      <button>Add to cart</button>
    </div>
  );
}

export default ProductCard;
