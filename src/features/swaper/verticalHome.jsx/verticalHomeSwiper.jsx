import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function VerticalHomeSwaper() {
  return (
    <div className="w-[90%] m-auto ">
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
          <img src="/Frame 560 (1).png" alt="" className="w-96 h-96 m-auto" />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src="/Frame 560 (1).png" alt="" className="w-96 h-96 m-auto" />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src="/Frame 560 (1).png" alt="" className="w-96 h-96 m-auto" />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src="/Frame 560 (1).png" alt="" className="w-96 h-96 m-auto" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
