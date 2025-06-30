export default function ArrivalNet() {
  return (
    <>
      <div className="mb-10 mt-10">
        <div className="w-[90%] m-auto">
          <div className="grid md:grid-cols-4 md:grid-rows-2  w-[90%] m-auto gap-4">
            <img
              src="/Frame 684.png"
              alt=""
              className="md:col-span-2 md:row-span-2 w-[80%] m-auto  md:w-[100%]"
            />
            <img
              src="/Frame 685.png"
              alt=""
              className="md:col-span-2 w-[80%] md:w-[100%] m-auto "
            />
            <img
              src="/Frame 686.png"
              alt=""
              className="w-[80%] m-auto  md:w-[100%]"
            />
            <img
              src="/Frame 687.png"
              alt=""
              className="w-[80%] m-auto  md:w-[100%]"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-1 gap-10   mt-30 mb-30">
            <div className="flex flex-col items-center justify-center ">
              <img src="/Services.png" alt="" className="w-24 m-auto mb-2" />
              <h1 className="font-bold ">FREE AND FAST DELIVERY</h1>
              <span className="font-light m-auto">
                Free delivery for all orders over $140
              </span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="/Services (1).png"
                alt=""
                className="w-24 m-auto mb-2"
              />
              <h1 className="font-bold ">24/7 CUSTOMER SERVICE</h1>
              <span className="font-light m-auto">
                friendly 24/7 customer support
              </span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="/Services (2).png"
                alt=""
                className="w-24 m-auto mb-2"
              />
              <h1 className="font-bold ">MONEY BACK GUARANTEE</h1>
              <span className="font-light m-auto">
                We reurn money within 30 days
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
