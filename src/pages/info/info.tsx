import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { infoGetById } from "../../entities/info/api/infoApi";
import NewBreadUi from "../../shared/ui/custom/newBreadUi/newBreadUi";
import { Star, Heart } from "lucide-react";
import { Button } from "../../shared/ui/kit/button";
import { decriment, increment } from "../../entities/info/reducer/infoSlice";
import { toast } from "react-hot-toast";

export default function Info() {
  const { infoData } = useSelector((state) => state.info);
  const { counterProduct } = useSelector((state) => state.info);
  const { id } = useParams();

  const images = infoData?.images || [];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(infoGetById(id));
  }, [dispatch]);
  console.log(infoData);
  const isInStock = infoData.quantity > 0;
  const [buttonSizeXs, setButtonSizeXs] = useState(false);
  const [buttonSizeS, setButtonSizeS] = useState(false);
  const [buttonSizeM, setButtonSizeM] = useState(false);
  const [buttonSizeL, setButtonSizeL] = useState(false);
  const [buttonSizeXl, setButtonSizeXl] = useState(false);
  const [incrementState, setIncrementState] = useState(false);
  const [decrimentState, setdecrimentState] = useState(false);
  const [wislistButtonState, setwislistButtonState] = useState(false);

  const [selectedColor, setSelectedColor] = useState("");

  return (
    <>
      <NewBreadUi href={`${infoData.id}`} isEnd={`${infoData.productName}`} />

      <div className="w-[90%] m-auto grid grid-cols-1 md:grid-cols-[55%_40%] place-items-center place-content-center gap-4 mb-10 mt-10">
        <div className="grid grid-cols-5 w-[99%] mx-auto mt-10 mb-10 gap-2 place-items-center">
          {images.map((el) => {
            return (
              <div
                key={el.id}
                className="col-span-1 flex flex-col gap-1
              "
              >
                <div>
                  <img
                    src={`http://37.27.29.18:8002/images/${el.images}`}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={`http://37.27.29.18:8002/images/${el.images}`}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={`http://37.27.29.18:8002/images/${el.images}`}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={`http://37.27.29.18:8002/images/${el.images}`}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
          <div className="col-span-4">
            {images.map((el) => {
              return (
                <img
                  key={el.id}
                  src={`http://37.27.29.18:8002/images/${el.images}`}
                  alt=""
                  className=""
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-1 w-[99%] m-auto ">
          <h1 className="text-xl md:text-3xl font-medium">
            {infoData.productName}
          </h1>
          <div className="flex items-center gap-0.5">
            <Star className="text-yellow-500 " />
            <Star className="text-yellow-500 " />
            <Star className="text-yellow-500 " />
            <Star className="text-yellow-500 " />
            <Star className="text-gray-300" />
            <span
              className="text-gray-400 text-sm
             "
            >
              ({infoData.subCategoryId} Rewievs) |
            </span>
            <p className={isInStock ? "text-green-600" : "text-red-500"}>
              {isInStock ? "In Stock" : "Out of Stock"}
            </p>
          </div>
          <div className="border-b-2 border-gray-200">
            <h2 className="text-lg md:text-xl font-medium">
              ${infoData.price}
            </h2>
            <p className="mb-2">{infoData.description}</p>
          </div>
          <div className="flex items-center mt-2 mb-2 gap-2">
            <span className="font-medium">Colours :</span>
            <div
              onClick={() => setSelectedColor(infoData.color)}
              className={`  rounded-full  ${
                selectedColor === infoData.color
                  ? "border-green-500"
                  : "border-transparent"
              }`}
              style={{
                backgroundColor: infoData.color,
                width: "20px",
                height: "20px",
              }}
            ></div>
          </div>
          <div className="flex items-center gap-1 mt-4 mb-4">
            <span className="font-medium">Size:</span>
            <div className="flex items-center gap-2">
              <Button
                onClick={() => setButtonSizeXs(!buttonSizeXs)}
                className={`rounded-[2px] border h-8 ${
                  buttonSizeXs === true
                    ? "bg-[#db4444] text-white border-none"
                    : "bg-white"
                }`}
              >
                XS
              </Button>
              <Button
                onClick={() => setButtonSizeS(!buttonSizeS)}
                className={`rounded-[2px] border h-8 ${
                  buttonSizeS === true
                    ? "bg-[#db4444] text-white border-none"
                    : "bg-white"
                }`}
              >
                S
              </Button>
              <Button
                onClick={() => setButtonSizeM(!buttonSizeM)}
                className={`rounded-[2px] border h-8 ${
                  buttonSizeM === true
                    ? "bg-[#db4444] text-white border-none"
                    : "bg-white"
                }`}
              >
                M
              </Button>
              <Button
                onClick={() => setButtonSizeL(!buttonSizeL)}
                className={`rounded-[2px] border h-8 ${
                  buttonSizeL === true
                    ? "bg-[#db4444] text-white border-none"
                    : "bg-white"
                }`}
              >
                L
              </Button>
              <Button
                onClick={() => setButtonSizeXl(!buttonSizeXl)}
                className={`rounded-[2px] border h-8 ${
                  buttonSizeXl === true
                    ? "bg-[#db4444] text-white border-none"
                    : "bg-white"
                }`}
              >
                Xl
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-3 md:gap-4 mb-2 mt-2 ">
            <div className="flex items-center gap-4">
              <Button
                aria-label="Increment Value"
                onClick={() => {
                  if (counterProduct > 0) {
                    dispatch(decriment());
                  } else {
                    toast.error("Error");
                  }
                  setIncrementState(!incrementState);
                }}
                className={` border  text-3xl items-center  ${
                  incrementState === true
                    ? "bg-[#db4444] text-white border-none"
                    : "bg-white"
                }`}
              >
                -
              </Button>
              <span>{counterProduct}</span>
              <Button
                aria-label="Decriment Value"
                onClick={() => {
                  dispatch(increment());
                  setdecrimentState(!decrimentState);
                }}
                className={` border  text-2xl items-center  ${
                  decrimentState === true
                    ? "bg-[#db4444] text-white border-none"
                    : "bg-white"
                }`}
              >
                +
              </Button>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 ">
              <Button className=" w-24 sm:w-30 rounded-[2px] bg-[#db4444] text-white">
                Buy Now
              </Button>
              <Button
                onClick={() => {
                  setwislistButtonState(!wislistButtonState);
                }}
                className={` border   items-center ${
                  wislistButtonState === true
                    ? "bg-[#db4444] text-white border-none"
                    : "bg-white"
                }`}
              >
                <Heart />
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-2 items-center justify-center mt-4 border-1 p-2 rounded-[2px] border-black/50">
            <div className="border-b-1">
              <img src="/Frame 915.png" alt="" className="w-[80%] m-auto" />
            </div>
            <div className="">
              <img src="/Frame 914.png" alt="" className="w-[80%] m-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
