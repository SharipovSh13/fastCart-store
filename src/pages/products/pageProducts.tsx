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
import { AlignLeft, Funnel, X } from "lucide-react";
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
        <div className="flex flex-col">
          <div className="w-[35%]">
            <AccordionProd
              type="single"
              collapsible
              className="bg-gray-50 border-b-2 border-gray-300/60
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
                        <h1 key={el.id} className="mt-1 ml-2 font-medium">
                          {el.categoryName}
                        </h1>
                      );
                    })}
                  {categories.length > 6 && (
                    <h1
                      className="mt-1 ml-2 font-medium text-[#db4444] cursor-pointer"
                      onClick={() => setShowAll(!showAll)}
                    >
                      {showAll ? "Show Less" : "See All"}
                    </h1>
                  )}
                </AccordionContentProd>
              </AccordionItemProd>
            </AccordionProd>
          </div>
          <div className="w-[35%]">
            <AccordionProd
              type="single"
              collapsible
              className="bg-gray-50 border-b-2 border-gray-300/60
              "
              defaultValue="item-1"
            >
              <AccordionItemProd value="item-1">
                <AccordionTriggerProd className="">Brands</AccordionTriggerProd>
                <AccordionContentProd>
                  {brandsData
                    .slice(0, showAll ? brandsData.length : 6)
                    .map((el) => {
                      return (
                        <div
                          key={el.id}
                          className=" ml-2 font-medium flex items-center gap-2"
                        >
                          <Input type="checkbox" className="w-4 " />
                          <h1>{el.brandName}</h1>
                        </div>
                      );
                    })}
                  {brandsData.length > 6 && (
                    <h1
                      className="mt-1 ml-2 font-medium text-[#db4444] cursor-pointer"
                      onClick={() => setShowAll(!showAll)}
                    >
                      {showAll ? "Show Less" : "See All"}
                    </h1>
                  )}
                </AccordionContentProd>
              </AccordionItemProd>
            </AccordionProd>
          </div>
        </div>
        <div className=""></div>
      </div>

      <h1>Page Products</h1>
      <h1>Kor kardam</h1>
    </>
  );
}
