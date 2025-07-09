import { Button } from "../../shared/ui/kit/button";
import { ArrowLeft, ArrowRight, Star, Heart, Eye } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../entities/products/api/productApi";
import { ProductCard } from "../../shared/components/productCard/productCard";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { differenceInSeconds } from "date-fns";
import "swiper/css";
import "swiper/css/navigation";
export default function FlashSale() {
  const { products } = useSelector((state) => state.products);

  const endOfPromotion = new Date(2025, 6, 22, 23, 59, 59);

  const swiperRef = useRef();
  const [dateState, setDateState] = useState(new Date());
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    const intervalId = setInterval(() => {
      setDateState((prevDate) => new Date(prevDate.getTime() + 1000));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  const remainingSeconds = differenceInSeconds(endOfPromotion, dateState);
  const remainingDays = Math.floor(remainingSeconds / (24 * 60 * 60));
  const remainingHours = Math.floor(
    (remainingSeconds % (24 * 60 * 60)) / (60 * 60)
  );
  const remainingMinutes = Math.floor((remainingSeconds % (60 * 60)) / 60);
  const remainingSecondsMod = remainingSeconds % 60;
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
              <h2 className="font-bold text-xl">{remainingDays}</h2>
            </div>
            <h1 className="font-bold text-2xl text-[#DB4444]">:</h1>
            <div>
              <span className="font-[400]">Hours</span>
              <h2 className="font-bold text-2xl">{remainingHours}</h2>
            </div>
            <h1 className="font-bold text-2xl text-[#DB4444]">:</h1>

            <div>
              <span className="font-[400]">Minutes</span>
              <h2 className="font-bold text-xl">{remainingMinutes}</h2>
            </div>
            <h1 className="font-bold text-2xl text-[#DB4444]">:</h1>

            <div>
              <span className="font-[400]">Seconds</span>
              <h2 className="font-bold text-2xl">{remainingSecondsMod}</h2>
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
            {products?.products?.map((product) => {
              return (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} />
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
