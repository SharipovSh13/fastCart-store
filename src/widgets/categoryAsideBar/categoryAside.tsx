import { AppDispatch, RootState } from "@/app/store/store";
import { getCategory } from "@/entities/category/api/categoryApi";
import { ICategory } from "@/shared/lib/interface";
import {
  AccordionContentCustom,
  AccordionCustom,
  AccordionItemCustom,
  AccordionTriggerCustom,
} from "@/shared/ui/kit/accordionNoChevron";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/kit/accordion";
import { Search, ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AsideCategory() {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector(
    (state: RootState) => state.categories.data
  ) as ICategory[];

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);
  return (
    <>
      <div className=" ">
        <div className="hidden lg:block">
          <div>
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="border-r-[1.5px] border-r-gray-300"
            >
              {categories.slice(0, 2).map((cat, index) => {
                return (
                  <AccordionItem
                    value={`item_${index}`}
                    key={index}
                    className="border-none"
                  >
                    <AccordionTrigger className="">
                      {cat.categoryName}
                    </AccordionTrigger>
                  </AccordionItem>
                );
              })}
            </Accordion>

            <AccordionCustom type="single" collapsible>
              {categories.slice(2).map((cat, index) => {
                return (
                  <AccordionItemCustom
                    key={index}
                    className="border-b-0 border-r-[1.5px] border-gray-300 "
                    value={`item_${index}`}
                  >
                    <AccordionTriggerCustom>
                      {cat.categoryName}
                    </AccordionTriggerCustom>
                  </AccordionItemCustom>
                );
              })}
            </AccordionCustom>
          </div>
        </div>
        <div className=" lg:hidden flex flex-col items-center justify-center  z-10 p-2 absolute w-[95%] right-[3%] mt-2 mb-2 ">
          <div className="relative w-[90%] mb-2 shadow shadow-black/30">
            <input
              type="search"
              className="bg-white w-[100%] m-auto border-1 h-12 p-2 border-gray-100  "
              placeholder="Search"
            />
            <Search className="absolute top-3 left-[90%]" />
          </div>
          <div className="flex flex-wrap gap-2 w-[90%] m-auto">
            {categories.slice(0, 2).map((el) => {
              return (
                <div
                  key={el.id}
                  className="bg-gray-100 flex items-center justify-center text-xl  p-2 h-8 w-fit rounded shadow shadow-black/40 "
                >
                  <h1>{el.categoryName}</h1>
                  <ChevronRight />
                </div>
              );
            })}
            {categories.map((el) => {
              return (
                <div
                  key={el.id}
                  className="bg-gray-100 flex items-center justify-center text-xl  p-2 h-8 w-fit rounded shadow shadow-black/40 "
                >
                  <h1>{el.categoryName}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
