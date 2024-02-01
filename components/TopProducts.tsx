import { FetchProducts } from "@/app/actions/getStripeProducts";
import ProductCard from "./ProductCard";
import Link from "next/link";

async function TopProducts() {
  const products = await FetchProducts();
  const topProducts = products.filter(
    (product) => product.metadata?.topRated === "true"
  );

  return (
    <div className="main-container">
      <div className="flex justify-between items-center">
        <h4>TOP PRODUCTS</h4>
        <Link href="">View More &#8594;</Link>
      </div>
      <div>
        {topProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default TopProducts;
