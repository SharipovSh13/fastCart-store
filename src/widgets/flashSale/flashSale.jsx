import { Button } from "../../shared/ui/kit/button";
import { ArrowLeft, ArrowRight, Star, Heart, Eye } from "lucide-react";
export default function FlashSale() {
  return (
    <>
      <div>
        <div className="w-[90%] m-auto mt-10  grid">
          <div className="flex items-center gap-4 font-medium mb-4">
            <Button className="rounded-[2px] w-6 h-16 bg-[#DB4444]"></Button>
            <h1 className="text-[#DB4444] ">Today’s</h1>
          </div>
          <div className="flex items-center gap-14 ">
            <h1 className="font-bold text-5xl   ">Flash Sales</h1>
            <div className="flex items-center gap-10 ">
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
          <div className="flex items-center gap-8 w-[12%] ml-auto  relative bottom-8">
            <ArrowLeft className="bg-gray-100 w-8 h-8  rounded-full"></ArrowLeft>
            <ArrowRight className="bg-gray-100 w-8 h-8  rounded-full"></ArrowRight>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-1 mb-10">
        <div className="grid grid-cols-4 gap-2 w-[95%] m-auto">
          <div className=" ml-2 mb-10 max-w-fit p-4">
            <div className="bg-gray-100 w-[100%] p-2">
              <div className="w-[99.9%] m-auto mt-0.5 flex justify-between">
                <Button className="bg-[#DB4444] text-white text-xs w-fit">
                  -40%
                </Button>
                <div className="flex flex-col gap-2">
                  <Heart className="h-6 w-6 bg-white rounded-full p-1" />
                  <Eye className="h-6 w-6 bg-white rounded-full p-1" />
                </div>
              </div>
              <img
                src="/public/Frame 611.png"
                alt=""
                className="w-[80%] m-auto"
              />
            </div>
            <div>
              <h1 className="font-medium">HAVIT HV-G92 Gamepad</h1>
              <p className="flex items-center gap-2">
                <span className="text-[#DB4444] font-normal">$120</span>
                <span className="text-gray-400 line-through">$160</span>
              </p>
              <p className="flex items-center mt-2 mb-2 gap-0.5">
                <Star className="w-4 h-4 text-yellow-600" />
                <Star className="w-4 h-4 text-yellow-600" />
                <Star className="w-4 h-4 text-yellow-600" />
                <Star className="w-4 h-4 text-yellow-600" />
                <Star className="w-4 h-4 text-yellow-600" />
                <span className="font-medium text-">(88)</span>
              </p>
            </div>
          </div>
          <div className=" ml-2 mb-10 max-w-fit p-4">
            <div className="bg-gray-100 w-[100%] p-2">
              <div className="w-[99.9%] m-auto mt-0.5 flex justify-between">
                <Button className="bg-[#DB4444] text-white text-xs w-fit">
                  -40%
                </Button>
                <div className="flex flex-col gap-2">
                  <Heart className="h-6 w-6 bg-white rounded-full p-1" />
                  <Eye className="h-6 w-6 bg-white rounded-full p-1" />
                </div>
              </div>
              <img
                src="/public/Frame 611.png"
                alt=""
                className="w-[80%] m-auto"
              />
            </div>
            <div>
              <h1 className="font-medium">HAVIT HV-G92 Gamepad</h1>
              <p className="flex items-center gap-2">
                <span className="text-[#DB4444] font-normal">$120</span>
                <span className="text-gray-400 line-through">$160</span>
              </p>
              <p className="flex items-center mt-2 mb-2 gap-0.5">
                <Star className="w-4 h-4 text-yellow-600" />
                <Star className="w-4 h-4 text-yellow-600" />
                <Star className="w-4 h-4 text-yellow-600" />
                <Star className="w-4 h-4 text-yellow-600" />
                <Star className="w-4 h-4 text-yellow-600" />
                <span className="font-medium text-">(88)</span>
              </p>
            </div>
          </div>
          <div className=" ml-2 mb-10 max-w-fit p-4">
            <div className="bg-gray-100 w-[100%] p-2">
              <div className="w-[99.9%] m-auto mt-0.5 flex justify-between">
                <Button className="bg-[#DB4444] text-white text-xs w-fit">
                  -40%
                </Button>
                <div className="flex flex-col gap-2">
                  <Heart className="h-6 w-6 bg-white rounded-full p-1" />
                  <Eye className="h-6 w-6 bg-white rounded-full p-1" />
                </div>
              </div>
              <img
                src="/public/Frame 611.png"
                alt=""
                className="w-[80%] m-auto"
              />
            </div>
            <div>
              <h1 className="font-medium">HAVIT HV-G92 Gamepad</h1>
              <p className="flex items-center gap-2">
                <span className="text-[#DB4444] font-normal">$120</span>
                <span className="text-gray-400 line-through">$160</span>
              </p>
              <p className="flex items-center mt-2 mb-2 gap-0.5">
                <Star className="w-4 h-4 text-yellow-600" />
                <Star className="w-4 h-4 text-yellow-600" />
                <Star className="w-4 h-4 text-yellow-600" />
                <Star className="w-4 h-4 text-yellow-600" />
                <Star className="w-4 h-4 text-yellow-600" />
                <span className="font-medium text-">(88)</span>
              </p>
            </div>
          </div>
          <div className=" ml-2 mb-10 max-w-fit p-4">
            <div className="bg-gray-100 w-[100%] p-2">
              <div className="w-[99.9%] m-auto mt-0.5 flex justify-between">
                <Button className="bg-[#DB4444] text-white text-xs w-fit">
                  -40%
                </Button>
                <div className="flex flex-col gap-2">
                  <Heart className="h-6 w-6 bg-white rounded-full p-1" />
                  <Eye className="h-6 w-6 bg-white rounded-full p-1" />
                </div>
              </div>
              <img
                src="/public/Frame 611.png"
                alt=""
                className="w-[80%] m-auto"
              />
            </div>
            <div>
              <h1 className="font-medium">HAVIT HV-G92 Gamepad</h1>
              <p className="flex items-center gap-2">
                <span className="text-[#DB4444] font-normal">$120</span>
                <span className="text-gray-400 line-through">$160</span>
              </p>
              <p className="flex items-center mt-2 mb-2 gap-0.5">
                <Star className="w-4 h-4 text-yellow-600" />
                <Star className="w-4 h-4 text-yellow-600" />
                <Star className="w-4 h-4 text-yellow-600" />
                <Star className="w-4 h-4 text-yellow-600" />
                <Star className="w-4 h-4 text-yellow-600" />
                <span className="font-medium text-">(88)</span>
              </p>
            </div>
          </div>
        </div>
        <Button className="bg-[#DB4444] rounded-[1px] w-[220px] text-white">
          View All Products
        </Button>
      </div>
      <div className="border-b-2 mb-10 w-[90%] m-auto border-gray-300/30 rounded-b-2xl"></div>
    </>
  );
}
