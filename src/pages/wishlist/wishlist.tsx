import { useSelector } from "react-redux";
import { Button } from "../../shared/ui/kit/button";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Star, Trash, ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  addWishlistProduct,
  removeWishlistProduct,
  clearWishlist,
} from "../../entities/wihslist/reducer/wishlistSlice";
export default function WishlistPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { wishlistProducts } = useSelector((state) => state.wishlist);
  console.log(wishlistProducts);
  const [isNew, setIsNew] = useState(false);

  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(localStorage.getItem("access_token"));
  }, []);

  const handleAddToCart = () => {
    if (!token) {
      toast.error("Avval Registratsya kuned");
      navigate("/registration");
      return;
    }
    if (product.quantity <= 0) {
      toast.error("Mahsulot ba itmom rasid ");
      return;
    }
    dispatch(addToCart(product.id));
    toast.success("Mahsulot gundoshta shud");
  };

  return (
    <>
      <div className="w-[90%] m-auto  mt-6 mb-6">
        <div className="flex items-center justify-between w-[90%] m-auto p-2">
          <h1 className="font-medium text-lg md:text-xl">
            Wishlist ({wishlistProducts.length})
          </h1>
          <Button
            className="h-10 border-1 border-gray-300 rounded-[6px]"
            onClick={() => dispatch(clearWishlist())}
          >
            Move All to Bag
          </Button>
        </div>
        <div className="flex gap-2 overflow-scroll">
          {wishlistProducts?.map((product, index) => {
            return (
              <div
                key={index}
                className=" w-fit  md:w-fit p-2 group h-80
              "
              >
                <div className="bg-gray-100 w-full p-2 h-56">
                  <div className="w-60 m-auto mt-0.5 flex justify-between">
                    <Button
                      className={`text-white text-xs w-fit ${
                        isNew ? "bg-green-500" : "bg-[#DB4444]"
                      }`}
                    >
                      {isNew
                        ? "New"
                        : `- ${
                            product.discountPrice < 80
                              ? product.discountPrice
                              : Math.floor(10 * Math.random(32))
                          }%`}
                    </Button>
                    <div className="flex flex-col gap-2 ml-auto ">
                      <Trash
                        className="h-6 w-6 bg-white rounded-full p-1"
                        onClick={() => {
                          dispatch(removeWishlistProduct(product.id));
                        }}
                      />
                    </div>
                  </div>
                  <img
                    src={`http://37.27.29.18:8002/images/${product.image}`}
                    alt={product.productName}
                    className="w-full h-36 object-contain m-auto"
                  />
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
                  <p className="flex items-center mt-2  gap-0.5">
                    {Array(5)
                      .fill()
                      .map((_, idx) => (
                        <Star
                          key={idx}
                          className={`w-4 h-4 ${
                            idx < product.rating
                              ? "text-yellow-600"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    <span className="font-medium ml-1">
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
                <div
                  onClick={() => handleAddToCart()}
                  className="relative inset-x-0 bottom-30 w-[100%] h-8 bg-black transform translate-y-full opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 text-white flex items-center justify-center cursor-pointer"
                >
                  <ShoppingCart /> Add To Cart
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
