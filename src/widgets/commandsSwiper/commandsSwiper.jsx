import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Twitter, Instagram, Linkedin } from "lucide-react";

export default function CommandsSwiper() {
  return (
    <>
      <div>
        <div className="w-[90%] m-auto mb-10 mt-30">
          <div
            className="flex
           overflow-x-auto whitespace-nowrap w-[95%] m-auto gap-10 p-4 "
          >
            <div className="inline-block max-w-fit mb-6  ">
              <img src="/Frame 874.png" alt="" className="w-72 h-56" />
              <h1 className="font-medium text-xl md:text-2xl">Tom Cruise</h1>
              <span>Founder & Chairman</span>
              <div className="flex items-center gap-4">
                <Twitter />
                <Instagram />
                <Linkedin />
              </div>
            </div>
            <div className="inline-block max-w-fit mb-6 ">
              <img src="/Frame 875.png" alt="" className="w-72 h-56" />
              <h1 className="font-medium text-xl md:text-2xl">Emma Watson</h1>
              <span>Managing Director</span>
              <div className="flex items-center gap-4">
                <Twitter />
                <Instagram />
                <Linkedin />
              </div>
            </div>
            <div className="inline-block  max-w-fit  mb-6">
              <img src="/Frame 876.png" alt="" className="w-72 h-56" />
              <h1 className="font-medium text-xl md:text-2xl">Will Smith</h1>
              <span>Product Designer</span>
              <div className="flex items-center gap-4">
                <Twitter />
                <Instagram />
                <Linkedin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
