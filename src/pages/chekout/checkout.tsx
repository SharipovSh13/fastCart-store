import BreadUi from "../../shared/components/breadUi/breadUi";
import { Input } from "../../shared/ui/kit/input";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCart } from "../../entities/cart/api/cartApi";
import { Button } from "../../shared/ui/kit/button";
import { toast } from "react-hot-toast";

export default function CheckoutPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);
  const navigate = useNavigate();
  const { cartData } = useSelector((state) => state.cart);
  const productsInCart = cartData?.[0]?.productsInCart ?? [];

  const totalPrice = cartData?.[0]?.totalPrice ?? 0;
  const token = localStorage.getItem("access_token");

  const handleAddToOrder = () => {
    if (token) {
      toast.success("Ваш Заказ был принят");
      navigate("/");
    } else {
      toast.error("Не зарегистрированно");
      navigate("/registration");
    }
  };

  const handlOrder = (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value.trim();
    const lastName = e.target.lastName.value.trim();
    const streetAddress = e.target.streetAddress.value.trim();
    const appartment = e.target.appartment.value.trim();
    const townCity = e.target.townCity.value.trim();
    const phoneNumber = e.target.phoneNumber.value.trim();
    const email = e.target.email.value.trim();

    if (
      !firstName ||
      !lastName ||
      !streetAddress ||
      !appartment ||
      !townCity ||
      !phoneNumber ||
      !email
    ) {
      toast.error("Заполните все поля!");
      return;
    }
    handleAddToOrder();
  };

  return (
    <>
      <BreadUi isEnd={`checkout`} />
      <h1>Page Chekout</h1>

      <form onSubmit={handlOrder}>
        <div className="w-[90%] m-auto grid grid-cols-1 gap-6 md:grid-cols-2 place-items-center place-content-center mb-10 mt-10">
          <div className=" w-[100%] p-1 ">
            <h1 className="text-xl font-medium md:text-3xl md:font-bold mt-2 mb-4">
              Billing Details
            </h1>
            <div className="flex flex-col space-y-2 p-6   shadow-[0px_0px_22px_0px] shadow-gray-400/60 rounded">
              <Input
                placeholder="First Name"
                className="rounded-[2px]  m-auto border-gray-300 mt-2 mb-2"
                name="firstName"
              />
              <Input
                placeholder="Last Name"
                className="rounded-[2px]  m-auto border-gray-300 mt-2 mb-2"
                name="lastName"
              />
              <Input
                placeholder="Street address"
                className="rounded-[2px]  m-auto border-gray-300 mt-2 mb-2"
                name="streetAddress"
              />
              <Input
                placeholder="Appartment, floor, etc.(optional)"
                className="rounded-[2px]  m-auto border-gray-300 mt-2 mb-2"
                name="appartment"
              />
              <Input
                placeholder="Town/City"
                className="rounded-[2px]  m-auto border-gray-300 mt-2 mb-2"
                name="townCity"
              />
              <Input
                placeholder="Phone Number"
                type="number"
                className="rounded-[2px]  m-auto border-gray-300 mt-2 mb-2"
                name="phoneNumber"
              />
              <Input
                placeholder="Email"
                type="email"
                className="rounded-[2px]  m-auto border-gray-300 mt-2 mb-2"
                name="email"
              />
              <div className="flex items-center gap-4">
                <Input type="checkbox" className="w-6 bg-[#db4444]" />
                <span>
                  Save tjis information for faster check-out next time
                </span>
              </div>
            </div>
          </div>
          <div className="  w-[90%] p-2">
            <div className="flex flex-col space-y-3">
              {productsInCart?.map((el) => {
                const { id, product } = el;
                return (
                  <div key={id} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={`http://37.27.29.18:8002/images/${product.image}`}
                        alt=""
                        className="w-20"
                      />
                      <h1 className="font-medium ">
                        {product.productName.slice(0, 9)}
                      </h1>
                    </div>
                    <span>${product.price}</span>
                  </div>
                );
              })}
              <div className="flex items-center justify-between">
                <h1>Subtotal:</h1>
                <span className="font-medium">$ {totalPrice}</span>
              </div>
              <div className="flex items-center justify-between border-b-2 border-gray-200">
                <h1 className="mb-2">Shipping:</h1>
                <span className="font-medium mb-2">Free</span>
              </div>
              <div className="flex items-center justify-between">
                <h1>Total:</h1>
                <span className="font-medium">$ {totalPrice}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Input type="radio" className="w-4" />
                  <h1 className="font-medium">Bank</h1>
                </div>
                <img src="/Frame 834.png" alt="" className="w-32" />
              </div>
              <div className="flex items-center w-[100%] gap-2">
                <Input type="radio" className="w-4" />
                <h1 className="font-medium">Cash on Delivery</h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 rounded gap-3 mb-8  shadow-[0px_0px_16px_0px] shadow-gray-300 w-[100%] p-4 ">
                <Input
                  placeholder="Coupon Code "
                  className="w-[95%] rounded-[2px] border-1 border-gray-400"
                />
                <Button className="w-[35%] border-1 border-[#db4444] rounded-[2px] text-[#db4444]">
                  Aplly
                </Button>
              </div>
              <Button
                type="submit"
                className="w-[45%] bg-[#db4444] rounded-[2px]  text-white"
              >
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
