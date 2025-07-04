import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../shared/ui/kit/breadcrumb.tsx";
import CommandsSwiper from "../../widgets/commandsSwiper/commandsSwiper";
import BreadUi from "../../shared/components/breadUi/breadUi";

export default function AboutUs() {
  return (
    <>
      <BreadUi isEnd={`About`} />
      <div className="w-[90%] m-auto p-4 mt-10 mb-10">
        <div className="w-[90%] m-auto grid grid-cols-1 md:grid-cols-[46%_45%] place-items-center gap-6">
          <div className="flex flex-col space-y-10  ">
            <h1 className="text-3xl md:text-6xl font-medium">Our Story</h1>
            <p className="">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
            <p className="">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <img
            src="/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png"
            alt=""
            className="h-full w-[100%]"
          />
        </div>
      </div>
      <div className="w-[90%] m-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          <div className="flex flex-col items-center space-y-2 border-[1.5px] w-52 mb-4 p-4 rounded-[2px] border-gray-300/80">
            <img src="/Services (3).png" alt="" />
            <h1 className="font-bold text-2xl">10.5k</h1>
            <span className="font-medium">Sallers active our site</span>
          </div>
          <div className="flex flex-col items-center space-y-2 border-[1.5px] w-52 mb-4 p-4 rounded-[2px] border-gray-300/80">
            <img src="/Services (3).png" alt="" />
            <h1 className="font-bold text-2xl">10.5k</h1>
            <span className="font-medium">Sallers active our site</span>
          </div>
          <div className="flex flex-col items-center space-y-2 border-[1.5px] w-52 mb-4 p-4 rounded-[2px] border-gray-300/80">
            <img src="/Services (3).png" alt="" />
            <h1 className="font-bold text-2xl">10.5k</h1>
            <span className="font-medium">Sallers active our site</span>
          </div>
          <div className="flex flex-col items-center space-y-2 border-[1.5px] w-52 mb-4 p-4 rounded-[2px] border-gray-300/80">
            <img src="/Services (3).png" alt="" />
            <h1 className="font-bold text-2xl">10.5k</h1>
            <span className="font-medium">Sallers active our site</span>
          </div>
        </div>
        <CommandsSwiper />
      </div>
      <div className="w-[90%] m-auto grid grid-cols-1 md:grid-cols-3 md:gap-1 gap-10   mt-30 mb-30">
        <div className="flex flex-col items-center justify-center ">
          <img src="/Services.png" alt="" className="w-24 m-auto mb-2" />
          <h1 className="font-bold ">FREE AND FAST DELIVERY</h1>
          <span className="font-light m-auto">
            Free delivery for all orders over $140
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="/Services (1).png" alt="" className="w-24 m-auto mb-2" />
          <h1 className="font-bold ">24/7 CUSTOMER SERVICE</h1>
          <span className="font-light m-auto">
            friendly 24/7 customer support
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="/Services (2).png" alt="" className="w-24 m-auto mb-2" />
          <h1 className="font-bold ">MONEY BACK GUARANTEE</h1>
          <span className="font-light m-auto">
            We reurn money within 30 days
          </span>
        </div>
      </div>
    </>
  );
}
