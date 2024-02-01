import { FetchProducts } from "@/app/actions/getStripeProducts";
import ProductCard from "./ProductCard";
import Link from "next/link";

async function TopProducts() {
  const products = await FetchProducts();
  const topProducts = products.filter(
    (product) => product.metadata?.topRated === "true"
  );

  return (
    <div className="py-10 border-t">
      <div className="main-container">
        <div className="flex justify-between items-center">
          <h4 className="underline font-medium">TOP PRODUCTS</h4>
          <Link href="/shop" className="hover:underline">
            View More &#8594;
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 items-center mt-5 gap-2">
          {topProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopProducts;
