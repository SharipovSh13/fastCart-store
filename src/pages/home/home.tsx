import AsideCategory from "@/widgets/categoryAsideBar/categoryAside";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Home() {
    return <>
        <section aria-label="Главная меню и слайдер карусел" className="w-[99.9%] m-auto">
            <div className=" flex w-[98%] m-auto p-2">
                <div className="w-44 m-auto">
                    <AsideCategory />
                </div>
                <div className="w-[70%] h-fit m-auto   flex items-center justify-items-center relative">
                    <Swiper
                        modules={[Autoplay, Pagination]}

                        spaceBetween={20}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        pagination={{
                            clickable: true,
                            bulletActiveClass: 'swiper-pagination-bullet-active',
                            dynamicBullets: false,

                        }}
                        autoplay={{

                            delay: 2500,
                            disableOnInteraction: true,
                        }}
                        style={{


                        }}

                    >

                        <SwiperSlide className="w-fit">
                            <img src="/Frame 560.png" alt="" />
                            <div className="w-54 h-6 absolute left-[37%] z-1 top-[91%] bg-slate-900 shadow-[0px_0px_5px_0px] rounded-sm shadow-gray-300">

                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="h-fit w-fit">
                            <img src="/Frame 560.png" alt="" />
                            <div className="w-54 h-6 absolute left-[37%] z-1 top-[91%] bg-slate-900 shadow-[0px_0px_5px_0px] rounded-sm shadow-gray-300">
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="h-fit w-fit">
                            <img src="/Frame 560.png" alt="" />
                            <div className="w-54 h-6 absolute left-[37%] z-1 top-[91%] bg-slate-900 shadow-[0px_0px_5px_0px] rounded-sm shadow-gray-300">
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="h-fit w-fit">
                            <img src="/Frame 560.png" alt="" />
                            <div className="w-54 h-6 absolute left-[37%] z-1 top-[91%] bg-slate-900 shadow-[0px_0px_5px_0px] rounded-sm shadow-gray-300">
                            </div>
                        </SwiperSlide>


                    </Swiper>

                </div>
            </div>
        </section>
    </>
}