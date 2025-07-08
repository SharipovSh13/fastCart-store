import BreadUi from "../../shared/ui/custom/newBreadUi/newBreadUi";
import { Input } from "../../shared/ui/kit/input";
import { Button } from "@/shared/ui/kit/button.tsx";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";

export default function AccountPage() {
  const [token, setToken] = useState(localStorage.getItem("access_token"));

  const decoded = jwtDecode(token);

  return (
    <>
      <BreadUi href={"account"} isEnd={"Account"} />
      <div className="w-[95%] m-auto">
        <div className="grid grid-cols-1 md:grid-cols-[30%_60%] mb-10  place-content-center gap-4">
          <div className="w-[95%] p-1 m-auto flex flex-col space-y-4">
            <div className="flex flex-col space-y-1">
              <h1 className="font-medium">Manage My Account</h1>
              <div className="w-[95%] m-auto flex flex-col space-y-1">
                <p className="text-[#db4444]">My Profile</p>
                <p>Addres Book</p>
                <p>My Payment Options</p>
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <h1 className="font-medium">My Orders </h1>
              <div className="w-[95%] m-auto flex flex-col space-y-1">
                <p>My Returns</p>
                <p>My Cancellations</p>
              </div>
            </div>
            <h1 className="font-medium">My Wishlist </h1>
          </div>
          <div className="shadow-[0px_0px_16px_0px] shadow-gray-400/60 p-2 rounded">
            <div>
              <h1 className="text-xl font-medium md:text-2xl ml-2 mb-2 text-[#db4444]">
                Profile
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-[45%_45%] gap-4 place-content-center">
                <div>
                  <label htmlFor="First Name">First Name</label>
                  <Input
                    className="rounded-[2px] border-gray-400"
                    value={decoded.name}
                  />
                </div>
                <div>
                  <label htmlFor="Last Name">Last Name</label>
                  <Input
                    className="rounded-[2px] border-gray-400"
                    value={decoded.name}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[45%_45%] gap-4 place-content-center">
                <div>
                  <label htmlFor="Email Addres">Email address</label>
                  <Input
                    className="rounded-[2px] border-gray-400"
                    value={decoded.email}
                  />
                </div>
                <div>
                  <label htmlFor="Street Address">Street Address</label>
                  <Input
                    className="rounded-[2px] border-gray-400"
                    value={decoded.iss}
                  />
                </div>
              </div>
            </div>
            <div className="flex mt-8 w-fit ml-auto mr-4  gap-4 p-2">
              <Button className="bg-gray-50 shadow rounded-[2px]">
                Cancel
              </Button>
              <Button className="bg-[#db4444] w-36 rounded-[2px] text-white font-medium">
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
