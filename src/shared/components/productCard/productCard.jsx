// components/ProductCard.jsx
import { Button } from "../../ui/kit/button";
import { Heart, Eye, Star } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../entities/cart/api/cartApi";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  addWishlistProduct,
  removeWishlistProduct,
} from "../../../entities/wihslist/reducer/wishlistSlice";
import { useSelector } from "react-redux";

export function ProductCard({ product, isNew = false }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { wishlistProducts } = useSelector((state) => state.wishlist);

  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(localStorage.getItem("access_token"));
  }, []);

  const [stateHeart, setStateHeart] = useState(null);

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

  const addToWishlist = (product) => {
    const isInWishlist = wishlistProducts.some(
      (item) => item.id === product.id
    );

    if (isInWishlist) {
      dispatch(removeWishlistProduct(product.id));
      setStateHeart(!stateHeart);
      toast("Удалено из избранного");
    } else {
      dispatch(addWishlistProduct(product));
      setStateHeart(!stateHeart);
      toast.success("Добавлено в избранное!");
    }
  };

  return (
    <div className="inline-block max-w-fit p-4 space-y-4 group">
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
          <div className="flex flex-col gap-2">
            <Heart
              className={` text-xs w-fit ${
                stateHeart ? "text-[#db4444]" : "text-black"
              }`}
              onClick={() => {
                addToWishlist(product), setStateHeart(!stateHeart);
              }}
            />
            <Link to={`/info/${product.id}`}>
              <Eye className="h-6 w-6 bg-white rounded-full p-1" />
            </Link>
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
          <span className="text-[#DB4444] font-normal">{product.price}</span>
          <span className="text-gray-400 line-through">
            {product.price + 120}
          </span>
        </p>
        <p className="flex items-center mt-2 mb-2 gap-0.5">
          {Array(5)
            .fill()
            .map((_, idx) => (
              <Star
                key={idx}
                className={`w-4 h-4 ${
                  idx < product.rating ? "text-yellow-600" : "text-gray-300"
                }`}
              />
            ))}
          <span className="font-medium ml-1">
            {product.quantity > 0 ? (
              `(${product.quantity})`
            ) : (
              <span className="text-red-500 animate-pulse">Out of stock</span>
            )}
          </span>
        </p>
      </div>
      <div
        onClick={() => handleAddToCart()}
        className="
        relative w-[100%] inset-x-0 bottom-32 h-8 bg-black transform translate-y-full opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 text-white flex items-center justify-center cursor-pointer
        "
      >
        Add To Cart
      </div>
    </div>
  );
}
