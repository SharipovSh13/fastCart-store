import AsideCategory from "@/widgets/categoryAsideBar/categoryAside";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Button } from "../../shared/ui/kit/button";
import { ArrowLeft, ArrowRight, Heart, Eye, Star } from "lucide-react";
import FlashSale from "../../widgets/flashSale/flashSale";
import BrowseCategory from "../../widgets/browseCategory/browseCategory";
import BestSelings from "../../widgets/bestSelings/bestSelings";
import VerticalHomeSwaper from "../../features/swaper/verticalHome.jsx/verticalHomeSwiper";
import ExpProducts from "../../widgets/expProducts/expProducts";
import ArrivalNet from "../../widgets/arrivalNet/arivvalNet";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  return (
    <>
      <section
        aria-label="Главная меню и слайдер карусел"
        className="w-[99.9%] m-auto"
      >
        <div className="">
          <div className="flex w-[98%] m-auto p-2">
            <div className="w-44 m-auto">
              <AsideCategory />
            </div>

            <div className="hidden lg:w-[70%] lg:h-fit lg:m-auto   lg:flex lg:items-center lg:justify-items-center lg:relative">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={{
                  clickable: true,
                  bulletActiveClass: "swiper-pagination-bullet-active",
                  dynamicBullets: false,
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: true,
                }}
              >
                <SwiperSlide className="">
                  <img src="/Frame 560.png" alt="" className="w-full h-auto" />
                  <div className="w-54 h-6 absolute left-[37%] z-1 top-[91%] bg-black shadow-[0px_0px_5px_0px] rounded-sm "></div>
                </SwiperSlide>
                <SwiperSlide className="">
                  <img src="/Frame 560.png" alt="" className="w-full h-auto" />
                  <div className="w-54 h-6 absolute left-[37%] z-1 top-[91%] bg-black shadow-[0px_0px_5px_0px] rounded-sm "></div>
                </SwiperSlide>
                <SwiperSlide className="">
                  <img src="/Frame 560.png" alt="" className="w-full h-auto" />
                  <div className="w-54 h-6 absolute left-[37%] z-1 top-[91%] bg-black shadow-[0px_0px_5px_0px] rounded-sm "></div>
                </SwiperSlide>
                <SwiperSlide className="">
                  <img src="/Frame 560.png" alt="" className="w-full h-auto" />
                  <div className="w-54 h-6 absolute left-[37%] z-1 top-[91%] bg-black shadow-[0px_0px_5px_0px] rounded-sm "></div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="block lg:hidden w-[100%]  mt-90 ml-auto mr-auto items-center justify-items-center relative">
            <VerticalHomeSwaper />
          </div>
          <FlashSale />
          <BrowseCategory />
          <BestSelings />
          <div className="w-[90%] m-auto p-2 ">
            <img
              src="/public/Frame 939.png"
              alt=""
              className="hidden sm:block"
            />
            <img
              src="/Frame 600.png"
              alt=""
              className="sm:hidden w-[100%] h-[550px] m-auto mt-2 mb-2"
            />
          </div>
        </div>
        <ExpProducts />
        <ArrivalNet />
      </section>
    </>
  );
}
