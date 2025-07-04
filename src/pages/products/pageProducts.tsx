import NewBreadUi from "../../shared/ui/custom/newBreadUi/newBreadUi";
import SearchUi from "../../shared/ui/custom/searchUi/searchUi";
import {
  AccordionProd,
  AccordionContentProd,
  AccordionItemProd,
  AccordionTriggerProd,
} from "@/shared/ui/custom/productsAccordion/productsAccordion";
import { Button } from "../../shared/ui/kit/button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../entities/category/api/categoryApi";
import { getBrands } from "../../entities/brand/api/brandApi";
import { AlignLeft, Funnel, X, Star } from "lucide-react";
import { Input } from "../../shared/ui/kit/input";

export default function ProductsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);
  const categories = useSelector((state) => state.categories.data);
  console.log(categories);

  const { brandsData } = useSelector((state) => state.brands);
  console.log(brandsData);

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 place-items-center mt-2 md:mt-8">
        <NewBreadUi href={"products"} isEnd={"Our Products"} />
        <SearchUi
          inpClassName={"h-12 w-[90%]"}
          divClassName={
            "flex items-center md:hidden mb-4 w-[80%] m-auto justify-between shadow-[0px_0px_6px_4px] shadow-gray-200 bg-gray-50/50 p-1"
          }
        />
        <div className=" shadow-[0px_0px_0px_1px] shadow-gray-400/70 rounded-[2px] hidden md:block">
          <AccordionProd type="single" collapsible className="h-12">
            <AccordionItemProd value="item-1">
              <AccordionTriggerProd>Populary</AccordionTriggerProd>
              <AccordionContentProd></AccordionContentProd>
            </AccordionItemProd>
          </AccordionProd>
        </div>
        <div className=" md:hidden flex flex-wrap gap-2 w-[80%] m-auto mb-4">
          <Button className="rounded-[5px] border-1 border-gray-300">
            Populary <AlignLeft />
          </Button>
          <Button className="rounded-[5px] border-1 border-gray-300">
            Filter (3)
            <Funnel />
          </Button>
          <Button className="rounded-[5px] border-1 border-gray-300">
            All Products
            <X />
          </Button>
          <Button className="rounded-[5px]  border-1 border-gray-300">
            Anny
            <X />
          </Button>
        </div>
      </div>

      <div
        className="w-[95%] m-auto grid
      grid-cols-1 md:grid-cols-2"
      >
        <div className="hidden md:block">
          <div className="flex flex-col">
            <div className="w-[40%]">
              <AccordionProd
                type="single"
                collapsible
                className="bg-gray-50 border-b-2 p-1 border-gray-300/60
              "
                defaultValue="item-1"
              >
                <AccordionItemProd value="item-1">
                  <AccordionTriggerProd className="">
                    Category
                  </AccordionTriggerProd>
                  <AccordionContentProd>
                    {categories
                      .slice(0, showAll ? categories.length : 6)
                      .map((el) => {
                        return (
                          <p key={el.id} className="mt-1 ml-2 font-medium">
                            {el.categoryName}
                          </p>
                        );
                      })}
                    {categories.length > 6 && (
                      <span
                        className="mt-1 ml-2 font-medium text-[#db4444] cursor-pointer"
                        onClick={() => setShowAll(!showAll)}
                      >
                        {showAll ? "Show Less" : "See All"}
                      </span>
                    )}
                  </AccordionContentProd>
                </AccordionItemProd>
              </AccordionProd>
            </div>
            <div className="w-[40%]">
              <AccordionProd
                type="single"
                collapsible
                className="bg-gray-50 p-1 border-b-2 border-gray-300/60
              "
                defaultValue="item-2"
              >
                <AccordionItemProd value="item-1">
                  <AccordionTriggerProd className="">
                    Brands
                  </AccordionTriggerProd>
                  <AccordionContentProd>
                    {Array.isArray(brandsData) &&
                      brandsData
                        .slice(0, showAll ? brandsData.length : 6)
                        .map((el) => {
                          return (
                            <div
                              key={el.id}
                              className="mt-1 ml-2 font-medium flex items-center gap-1"
                            >
                              <Input type="checkbox" className="w-4 " />
                              <span>{el.brandName}</span>
                            </div>
                          );
                        })}
                    {Array.isArray(brandsData) && brandsData.length > 6 && (
                      <span
                        className="mt-1 ml-2 font-medium text-[#db4444] cursor-pointer"
                        onClick={() => setShowAll(!showAll)}
                      >
                        {showAll ? "Show Less" : "See All"}
                      </span>
                    )}
                  </AccordionContentProd>
                </AccordionItemProd>
              </AccordionProd>
            </div>
            <div className="w-[40%]">
              <AccordionProd
                type="single"
                collapsible
                className="p-1 bg-gray-50 border-b-2 border-gray-300/60
              "
                defaultValue="item-1"
              >
                <AccordionItemProd value="item-1">
                  <AccordionTriggerProd>Features</AccordionTriggerProd>
                  <AccordionContentProd>
                    <div className=" ml-2 font-medium flex items-center gap-1">
                      <Input type="checkbox" className="w-4 " />
                      <span>Metallic</span>
                    </div>
                  </AccordionContentProd>
                  <AccordionContentProd>
                    <div className=" ml-2 font-medium flex items-center gap-1">
                      <Input type="checkbox" className="w-4 " />
                      <span>Plastic Cover</span>
                    </div>
                  </AccordionContentProd>
                  <AccordionContentProd>
                    <div
                      className="
                   ml-2 font-medium flex items-center gap-1"
                    >
                      <Input type="checkbox" className="w-4 " />
                      <h1>8GB Ram</h1>
                    </div>
                  </AccordionContentProd>
                  <AccordionContentProd>
                    <div className=" ml-2 font-medium flex items-center gap-1">
                      <Input type="checkbox" className="w-4 " />
                      <span>Super power</span>
                    </div>
                  </AccordionContentProd>
                  <AccordionContentProd>
                    <div className=" ml-2 font-medium flex items-center gap-1">
                      <Input type="checkbox" className="w-4 " />
                      <span>Large Memory</span>
                    </div>
                  </AccordionContentProd>
                </AccordionItemProd>
              </AccordionProd>
            </div>
            <div className="w-[40%]">
              <AccordionProd
                type="single"
                collapsible
                className="bg-gray-50 border-b-2 border-gray-300/60 p-1
              "
                defaultValue="item-1"
              >
                <AccordionItemProd value="item-1">
                  <AccordionTriggerProd>Price range</AccordionTriggerProd>
                  <AccordionContentProd>
                    <div className=" ml-2 font-medium  ">
                      <Input type="range" className="w-[100%] " />
                    </div>
                    <div className=" flex items-center gap-2">
                      <div className="flex flex-col  space-y-1">
                        <label htmlFor="">Min</label>
                        <Input placeholder="Max" className="border rounded" />
                      </div>
                      <div className="flex flex-col  space-y-1 ">
                        <label htmlFor="">Max</label>
                        <Input placeholder="Max" className="border rounded" />
                      </div>
                    </div>
                    <Button className="w-[100%] text-[#db4444] font-medium border-1 border-[#db4444] mt-2 ml-auto">
                      Apply
                    </Button>
                  </AccordionContentProd>
                </AccordionItemProd>
              </AccordionProd>
            </div>
            <div className="w-[40%]">
              <AccordionProd
                type="single"
                collapsible
                className="p-1 bg-gray-50 border-b-2 border-gray-300/60
              "
                defaultValue="item-1"
              >
                <AccordionItemProd value="item-1">
                  <AccordionTriggerProd>Condition</AccordionTriggerProd>
                  <AccordionContentProd>
                    <div className=" ml-2 font-medium flex items-center gap-1">
                      <Input type="radio" className="w-4 " />
                      <span>Any</span>
                    </div>
                  </AccordionContentProd>
                  <AccordionContentProd>
                    <div className=" ml-2 font-medium flex items-center gap-1">
                      <Input type="radio" className="w-4 " />
                      <span>Refurbished</span>
                    </div>
                  </AccordionContentProd>
                  <AccordionContentProd>
                    <div
                      className="
                   ml-2 font-medium flex items-center gap-1"
                    >
                      <Input type="radio" className="w-4 " />
                      <h1>Brand New</h1>
                    </div>
                  </AccordionContentProd>
                  <AccordionContentProd>
                    <div className=" ml-2 font-medium flex items-center gap-1">
                      <Input type="radio" className="w-4 " />
                      <span>Old items</span>
                    </div>
                  </AccordionContentProd>
                </AccordionItemProd>
              </AccordionProd>
            </div>
            <div className="w-[40%]">
              <AccordionProd
                type="single"
                collapsible
                className="p-1 bg-gray-50 border-b-2 border-gray-300/60
              "
                defaultValue="item-1"
              >
                <AccordionItemProd value="item-1">
                  <AccordionTriggerProd>Ratings</AccordionTriggerProd>
                  <AccordionContentProd>
                    <div className=" ml-2 font-medium flex items-center gap-1">
                      <Input type="checkbox" className="w-4 " />
                      <div className="flex items-center gap-0.5">
                        <Star className="drop-shadow drop-shadow-yellow-500 text-black/70 w-5" />
                        <Star className="drop-shadow drop-shadow-yellow-500 text-black/70 w-5" />
                        <Star className="drop-shadow drop-shadow-yellow-500 text-black/70 w-5" />
                        <Star className="drop-shadow drop-shadow-yellow-500 text-black/70 w-5" />
                        <Star className="drop-shadow drop-shadow-yellow-500 text-black/70 w-5" />
                      </div>
                    </div>
                  </AccordionContentProd>
                  <AccordionContentProd>
                    <div className=" ml-2 font-medium flex items-center gap-1">
                      <Input type="checkbox" className="w-4 " />
                      <div className="flex items-center gap-0.5">
                        <Star className="w-5 drop-shadow drop-shadow-yellow-500 text-black/70" />
                        <Star className="w-5 drop-shadow drop-shadow-yellow-500 text-black/70" />
                        <Star className="w-5 drop-shadow drop-shadow-yellow-500 text-black/70" />
                        <Star className="w-5 drop-shadow drop-shadow-yellow-500 text-black/70" />
                      </div>
                    </div>
                  </AccordionContentProd>
                  <AccordionContentProd>
                    <div
                      className="
                   ml-2 font-medium flex items-center gap-1"
                    >
                      <Input type="checkbox" className="w-4 " />

                      <div className="flex items-center gap-0.5">
                        <Star className="w-5 drop-shadow drop-shadow-yellow-500 text-black/70" />
                        <Star className="w-5 drop-shadow drop-shadow-yellow-500 text-black/70" />
                        <Star className="w-5 drop-shadow drop-shadow-yellow-500 text-black/70" />
                      </div>
                    </div>
                  </AccordionContentProd>
                  <AccordionContentProd>
                    <div className=" ml-2 font-medium flex items-center gap-1">
                      <Input type="checkbox" className="w-4 " />

                      <div className="flex items-center gap-0.5">
                        <Star className="w-5 drop-shadow drop-shadow-yellow-500 text-black/70" />
                        <Star className="w-5 drop-shadow drop-shadow-yellow-500 text-black/70" />
                      </div>
                    </div>
                  </AccordionContentProd>
                </AccordionItemProd>
              </AccordionProd>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3"></div>
      </div>
    </>
  );
}
