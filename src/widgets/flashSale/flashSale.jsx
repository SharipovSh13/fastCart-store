import { Button } from "../../shared/ui/kit/button";
import { ArrowLeft, ArrowRight, Star, Heart, Eye } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../entities/products/api/productApi";
import { addToCart } from "../../entities/cart/api/cartApi";
import { toast } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
export default function FlashSale() {
  const { products } = useSelector((state) => state.products);
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();
  const swiperRef = useRef();
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <div className="mt-14 sm:mt-64  md:mt-52 lg:mt-0">
        <div className="w-[90%] m-auto mt-10  grid grid-cols-1  ">
          <div className="flex items-center gap-4 font-medium mb-4">
            <Button className="rounded-[2px] w-6 h-16 bg-[#DB4444]"></Button>
            <h1 className="text-[#DB4444] ">Today’s</h1>
          </div>
          <h1 className="font-bold text-5xl">Flash Sales</h1>
          <div className="flex items-center gap-2 ">
            <div>
              <span className="font-[400]">Days</span>
              <h2 className="font-bold text-xl">03</h2>
            </div>
            <h1 className="font-bold text-2xl text-[#DB4444]">:</h1>
            <div>
              <span className="font-[400]">Hours</span>
              <h2 className="font-bold text-2xl">23</h2>
            </div>
            <h1 className="font-bold text-2xl text-[#DB4444]">:</h1>

            <div>
              <span className="font-[400]">Minutes</span>
              <h2 className="font-bold text-xl">19</h2>
            </div>
            <h1 className="font-bold text-2xl text-[#DB4444]">:</h1>

            <div>
              <span className="font-[400]">Seconds</span>
              <h2 className="font-bold text-2xl">56</h2>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 "></div>
        <div className=" pagination items-center gap-8 ml-auto  md:w-[12%] md:ml-auto hidden md:flex ">
          <ArrowLeft
            onClick={() => swiperRef.current?.slidePrev()}
            className={`w-8 h-8 rounded-full cursor-pointer transition ${
              isStart
                ? "opacity-30 cursor-not-allowed"
                : "bg-gray-100 hover:bg-[#db4444] hover:text-white"
            }`}
          ></ArrowLeft>
          <ArrowRight
            onClick={() => swiperRef.current?.slideNext()}
            className={`w-8 h-8 rounded-full cursor-pointer transition
             ${
               isEnd
                 ? "opacity-30 cursor-not-allowed"
                 : "bg-gray-100 hover:bg-[#DB4444] hover:text-white"
             }`}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center  mb-10 ">
        <div className="flex    w-[99.9%] m-auto  overflow-x-scroll  whitespace-nowrap  gap-4">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1.1}
            slidesPerGroup={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 3 },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsStart(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsStart(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            className="w-[95%] m-auto"
          >
            {products.products?.map((product) => {
              return (
                <SwiperSlide key={product.id}>
                  <div
                    className="inline-block   max-w-fit p-4   space-y-4  group"
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
                            toast.error("Iltimos regist kuned");
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
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <Link to={"/products"}>
          <Button className="bg-[#DB4444] rounded-[1px] mt-4 w-[220px] text-white">
            View All Products
          </Button>
        </Link>
      </div>
      <div className="border-b-2 mb-10 w-[90%] m-auto border-gray-300/30 rounded-b-2xl"></div>
    </>
  );
}
