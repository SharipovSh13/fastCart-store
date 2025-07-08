import { Button } from "../../shared/ui/kit/button";
import { Star, Heart, Eye } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../entities/products/api/productApi";
import { useEffect } from "react";

import { Link } from "react-router-dom";

import { ProductCard } from "../../shared/components/productCard/productCard";

export default function BestSelings() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts);
  }, [dispatch]);

  return (
    <>
      <div>
        <div className="w-[90%] m-auto">
          <div>
            <div className="flex items-center gap-2">
              <Button className="bg-[#db4444] w-2 h-16 rounded-[2px]"></Button>
              <h1 className="font-medium text-[#db4444]">This Month</h1>
            </div>
            <div className=" mt-4 mb-4 grid grid-cols-1 sm:grid-cols-2">
              <h1 className="text-4xl font-[600] ">Best Selling Products</h1>
              <div className="mt-4 ml-0 sm:ml-auto">
                <Link to={"/products"}>
                  <Button className="bg-[#db4444] text-white rounded-[2px] w-32">
                    View All
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto whitespace-nowrap card-div flex gap-4 w-[95%] m-auto">
          {products?.products?.slice(0, 4).map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </>
  );
}
