import { Phone, Mail } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../shared/ui/kit/breadcrumb.tsx";
import { Button } from "../../shared/ui/kit/button";
import { Input } from "../../shared/ui/kit/input";

export default function Contact() {
  return (
    <>
      <div className="w-[90%] m-auto mt-6 mb-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink href="/about">
                <h1>Contact</h1>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-[35%_55%] place-items-center w-[95%] m-auto ">
          <div className=" w-[95%] m-auto p-4 text-sm md:text-xl shadow-[0px_0px_26px_0px] rounded-[4px] shadow-gray-300">
            <div className="flex flex-col   rounded-[4px] ">
              <div className="flex flex-col space-y-3.5 border-b-2 p-2 border-gray-200 ">
                <div className="flex items-center gap-4">
                  <div className="bg-[#db4444] w-fit p-2 rounded-full">
                    <Phone className="text-white md:text-3xl " />
                  </div>
                  <h1 className="text-lg md:text-2xl font-medium">
                    Call To Us
                  </h1>
                </div>
                <p
                  className="font-medium text-sm md:text-lg
                 "
                >
                  We are available 24/7, 7 days a week.
                </p>
                <p className="font-medium mb-4   text-sm md:text-lg">
                  Phone: +8801611112222
                </p>
              </div>
              <div className=" flex flex-col space-y-3.5 border-b-2 p-2 border-gray-200  ">
                <div className="flex items-center gap-4">
                  <div className="bg-[#db4444] w-fit p-2 mt-2 rounded-full">
                    <Mail className="text-white md:text-3xl " />
                  </div>
                  <h1 className="text-lg md:text-2xl font-medium">
                    Write To Us
                  </h1>
                </div>
                <p className="font-medium  text-[14px] md:text-lg">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="font-medium  text-sm md:text-lg">
                  Email: customer@exclusive.com
                </p>
                <p className="font-medium text-sm md:text-lg mb-4">
                  Email: support@exclusive.com
                </p>
              </div>
            </div>
          </div>
          <div className="w-[95%]">
            <div className="w-[100%] mt-10 md:mt-0  m-auto p-4 shadow-[0px_0px_26px_0px] shadow-gray-300 rounded-[4px]">
              <div className="grid grid-cols-1 md:gap-11 gap-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-10">
                  <Input
                    type="name"
                    placeholder="Name"
                    className="rounded-[4px] h-14 border-gray-300"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    className="rounded-[4px] h-14 border-gray-300"
                  />
                  <Input
                    type="phone"
                    placeholder="Phone"
                    className="rounded-[4px] h-14 border-gray-300"
                  />
                </div>
                <Input
                  type=""
                  placeholder="Your Message"
                  className="h-44 border-gray-300"
                />
                <Button className="bg-[#db4444] text-white rounded-[2px] w-48 h-11 ml-auto">
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1>page Contact</h1>
    </>
  );
}
