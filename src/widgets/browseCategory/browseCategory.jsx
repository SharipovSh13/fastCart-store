import React, { useEffect } from "react";
import { Button } from "../../shared/ui/kit/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getCategory } from "../../entities/category/api/categoryApi";
import { useDispatch, useSelector } from "react-redux";

export default function BrowseCategory() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.data);
  useEffect(() => {
    dispatch(getCategory);
  }, [dispatch]);

  return (
    <>
      <div>
        <div>
          <div className="w-[90%] m-auto mb-10">
            <div className=" m-auto mb-4 mt-10 text-[#db4444] flex items-center gap-2 font-medium">
              <Button className="w-2 h-16 bg-[#Db4444] rounded-[2px]  "></Button>
              <h1>Categories</h1>
            </div>
            <div className="flex items-center">
              <h1 className="text-3xl font-medium">Browse By Category</h1>
              <div className="flex items-center gap-8 w-[12%] ml-auto   ">
                <ArrowLeft className="bg-gray-100 w-8 h-8  rounded-full"></ArrowLeft>
                <ArrowRight className="bg-gray-100 w-8 h-8  rounded-full"></ArrowRight>
              </div>
            </div>
          </div>
          <div className="w-[90%] m-auto  border-b-2 border-gray-300/40 mb-10">
            <div className="grid  grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4 mb-14">
              {categories.slice(0, 6)?.map((category) => {
                return (
                  <div
                    key={category.id}
                    className="border-1 rounded border-gray-400/30 flex flex-col items-center gap-4 p-2   "
                  >
                    <img
                      src={
                        `http://37.27.29.18:8002/images/` +
                        category?.categoryImage
                      }
                      alt={category.categoryName}
                      className="w-[50%] m-auto "
                    />
                    <h1>{category.categoryName}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
