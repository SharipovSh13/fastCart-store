import { Button } from "../../shared/ui/kit/button";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../entities/products/api/productApi";
// import { addToCart } from "../../entities/cart/api/cartApi";
import { Link } from "react-router-dom";
import { Star, Heart, Eye } from "lucide-react";

import { ProductCard } from "../../shared/components/productCard/productCard";

export default function ExpProducts() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  // console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <div className="w-[90%] m-auto">
        <div>
          <div className="flex  items-center gap-2">
            <Button className="w-2 rounded-[2px] h-16  bg-[#db4444]"></Button>
            <h1 className="font-medium text-[#db4444]">Our Products</h1>
          </div>
          <h1 className="font-medium text-2xl sm:text-3xl  mt-2 mb-2">
            Explore Our Products
          </h1>
        </div>

        <div className="flex overflow-x-scroll whitespace-nowrap   ">
          {products?.products?.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex overflow-x-auto  whitespace-nowrap ">
          {products?.products?.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} isNew />
          ))}
        </div>
        <div className="w-[90%] m-auto flex flex-col items-center justify-center mb-4 mt-10">
          <Button className=" w-44 h-12 bg-[#db4444] text-white font-medium rounded-[4px] ">
            View All Products
          </Button>
        </div>
      </div>
    </>
  );
}
