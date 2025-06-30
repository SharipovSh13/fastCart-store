import { Button } from "../../shared/ui/kit/button";
import { Star, Heart, Eye } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../entities/products/api/productApi";
import { useEffect } from "react";
import { addToCart } from "../../entities/cart/api/cartApi";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function BestSelings() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();
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
          {products.products?.map((product) => {
            return (
              <div
                className="inline-block   max-w-fit p-4   space-y-4 group"
                key={product.id}
              >
                <div className="bg-gray-100 w-[100%] p-2 h-56 ">
                  <div className="w-60 m-auto mt-0.5 flex justify-between">
                    <Button className="bg-[#DB4444] text-white text-xs w-fit">
                      {`- ${product.discountPrice}%`}
                    </Button>
                    <div className="flex flex-col gap-2">
                      <Heart className="h-6 w-6 bg-white rounded-full p-1" />
                      <Eye className="h-6 w-6 bg-white rounded-full p-1" />
                    </div>
                  </div>
                  <img
                    src={`http://37.27.29.18:8002/images/` + product.image}
                    alt=""
                    className="w- h-36 m-auto"
                  />
                  <div
                    onClick={() => {
                      if (token) {
                        dispatch(addToCart(product.id));
                      } else {
                        toast.error("Please Registration!");
                        navigate("/registration");
                      }
                    }}
                    className="relative inset-x-0 bottom-0 h-8 bg-black
                    transform translate-y-full opacity-0
                    transition-all duration-300 ease-out
                    group-hover:translate-y-0 group-hover:opacity-100
                  text-white
                    flex items-center justify-center"
                  >
                    Add To Cart
                  </div>
                </div>
                <div>
                  <h1 className="font-medium">{product.productName}</h1>
                  <p className="flex items-center gap-2">
                    <span className="text-[#DB4444] font-normal">
                      {product.price}
                    </span>
                    <span className="text-gray-400 line-through">
                      {product.price + 120}
                    </span>
                  </p>
                  <p className="flex items-center mt-2 mb-2 gap-0.5">
                    <Star className="w-4 h-4 text-yellow-600" />
                    <Star className="w-4 h-4 text-yellow-600" />
                    <Star className="w-4 h-4 text-yellow-600" />
                    <Star className="w-4 h-4 text-yellow-600" />
                    <Star className="w-4 h-4 text-yellow-600" />
                    <span className="font-medium text-">
                      {product.quantity > 0 ? (
                        `(${product.quantity})`
                      ) : (
                        <span className="text-red-500 animate-pulse">
                          Out of stock
                        </span>
                      )}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
