import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../shared/ui/kit/button";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { getCategory } from "../../entities/category/api/categoryApi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function BrowseCategory() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.data);

  useEffect(() => {
    dispatch(getCategory);
  }, [dispatch]);

  const swiperRef = useRef();
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <>
      <div>
        <div>
          <div className="w-[90%] m-auto mb-10">
            <div className=" m-auto mb-4 mt-10 text-[#db4444] flex items-center gap-2 font-medium">
              <Button className="w-2 h-16 bg-[#Db4444] rounded-[2px]  "></Button>
              <h1>Categories</h1>
            </div>
            <div className="flex items-center">
              <h1 className="text-3xl font-medium">Browse By Category</h1>
              <div className="flex items-center gap-8 w-[12%] ml-auto   ">
                <ArrowLeft
                  onClick={() => swiperRef.current?.slidePrev()}
                  className={`bg-gray-100 w-8 h-8  rounded-full ${
                    isStart
                      ? "opacity-30 cursor-not-allowed"
                      : "bg-gray-100 hover:bg-[#db4444] hover:text-white"
                  }`}
                ></ArrowLeft>
                <ArrowRight
                  onClick={() => swiperRef.current?.slideNext()}
                  className={`bg-gray-100 w-8 h-8  rounded-full ${
                    isEnd
                      ? "opacity-30 cursor-not-allowed"
                      : "bg-gray-100 hover:bg-[#db4444] hover:text-white"
                  }`}
                ></ArrowRight>
              </div>
            </div>
          </div>

          <div className="w-[90%] m-auto  border-b-2 border-gray-300/40 mb-10">
            <div className="flex  items-center justify-center gap-4  mb-20 ">
              <Swiper
                modules={[Navigation]}
                spaceBetween={200}
                slidesPerView={1.3}
                slidesPerGroup={1}
                breakpoints={{
                  640: { slidesPerView: 6 },
                  768: { slidesPerView: 6 },
                  1024: { slidesPerView: 6 },
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
                className="w-[95%] m-auto mb-20 mt-10"
              >
                {categories.map((el) => {
                  return (
                    <SwiperSlide>
                      <div
                        className=" flex flex-col  items-center   w-48
                        border-2 border-gray-300/60 rounded-[4px] m-auto   "
                      >
                        <img
                          src={`http://37.27.29.18:8002/images/${el.categoryImage}`}
                          alt=""
                          className="w-40 "
                        />
                        <h1 className="font-medium mb-2 ">{el.categoryName}</h1>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
