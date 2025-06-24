import { Button } from "../../shared/ui/kit/button";

export default function BestSelings() {
  return (
    <>
      <div>
        <div className="w-[90%] m-auto">
          <div>
            <div className="flex items-center gap-2">
              <Button className="bg-[#db4444] w-2 h-16 rounded-[2px]"></Button>
              <h1 className="font-medium text-[#db4444]">This Month</h1>
            </div>
            <div className=" flex items-center justify-between mt-4 mb-4">
              <h1 className="text-4xl font-[600] fnt-inter">
                Best Selling Products
              </h1>
              <Button className="bg-[#db4444] text-white rounded-[2px] w-32">
                View All
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
