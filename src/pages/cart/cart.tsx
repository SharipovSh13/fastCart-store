import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getCart,
  deleteProductCart,
  increaseProductCart,
  reduceProductCart,
  deleteAllProductCart,
} from "../../entities/cart/api/cartApi";
import { Button } from "../../shared/ui/kit/button";
import { Link } from "react-router-dom";
import {
  ChevronUp,
  ChevronDown,
  CircleX,
  RotateCw,
  Trash2,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/kit/table";

export default function CartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartData } = useSelector((state) => state.cart);
  const productsInCart = cartData?.[0]?.productsInCart ?? [];
  const totalPrice = cartData?.[0]?.totalPrice ?? [];

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);
  return (
    <>
      <div>
        <div className="w-[90%] m-auto flex gap-2 mt-6 mb-6 ">
          <p>
            <Link to={"/"}>Home</Link>
          </p>
          /
          <p>
            <Link to={"/cart"}>Cart</Link>
          </p>
        </div>
        <div className="w-[90%] m-auto mb-20 ">
          <table className="md:w-[100%] md:m-auto hidden md:table">
            <thead
              className="font-light  text-lg text-start
            "
            >
              <tr className="border-none text-start ">
                <th className="text-start ">Product</th>
                <th className="text-start ">Price</th>
                <th className="text-start">Quantity</th>
                <th className="text-start ">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {productsInCart.map((el) => {
                const { id, product, quantity } = el;
                const total = product.price * quantity;
                return (
                  <tr
                    key={id}
                    className="shadow shadow-gray-400/30
                    z-1 h-28"
                  >
                    <td>
                      <div className="flex items-center gap-1 p-2">
                        <img
                          src={`http://37.27.29.18:8002/images/${product.image}`}
                          alt=""
                          className="w-26 rounded"
                        />
                        <h1 className="font-medium">{product.productName}</h1>
                      </div>
                    </td>
                    <td className=""> $ {product.price}</td>
                    <td className="text-start">
                      <div className="w-[90%] border-1 rounded border-gray-300">
                        <div className=" flex items-center justify-center  gap-6 font-medium w-[90%] ">
                          {quantity}
                          <div className="flex flex-col space-y-2">
                            <ChevronUp
                              className="animate-pulse hover:animate-none"
                              onClick={() => {
                                dispatch(increaseProductCart(id));
                              }}
                            />
                            <ChevronDown
                              onClick={() => {
                                dispatch(reduceProductCart(id));
                              }}
                              className="animate-pulse hover:animate-none"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="font-medium">$ {total}</td>
                    <td className="font-medium p-1">
                      <CircleX
                        className="text-red-500"
                        onClick={() => dispatch(deleteProductCart(id))}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="mt-4  shadow-black flex  flex-col gap-2 md:hidden">
            {productsInCart.map((el) => {
              const { id, product, quantity } = el;
              const total = product.price * quantity;
              return (
                <div
                  key={id}
                  className=" p-4 rounded-[2px] shadow-[0px_0px_6px_0px] shadow-gray-300 grid grid-cols-2 "
                >
                  <div className="">
                    <img
                      src={`http://37.27.29.18:8002/images/${product.image}`}
                      alt=""
                      className="w-16 h-16"
                    />
                    <h1>
                      {product.productName.length > 12
                        ? product.productName.slice(0, 10)
                        : product.productName}
                    </h1>
                    <span className="font-medium">$ {product.price}</span>
                  </div>
                  <div>
                    <div className=" flex items-center justify-center  gap-6 font-medium w-[60%] rounded-[2px] m-auto border-1  ">
                      {quantity}
                      <div className="flex flex-col space-y-2">
                        <ChevronUp
                          className="animate-pulse hover:animate-none"
                          onClick={() => {
                            dispatch(increaseProductCart(id));
                          }}
                        />
                        <ChevronDown
                          onClick={() => {
                            dispatch(reduceProductCart(id));
                          }}
                          className="animate-pulse hover:animate-none"
                        />
                      </div>
                    </div>
                    <div className="w-[60%] m-auto mt-7 flex items-center justify-around">
                      <h2 className="font-medium">$ {total}</h2>
                      <CircleX className="text-[#db4444] animate-pulse" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-10 flex   justify-between">
            <Button
              onClick={() => navigate("/products")}
              className="rounded-[2px] h-10 border-1 font-medium w-32 "
            >
              Retur To Shop
            </Button>
            <div className="flex items-center justify-center">
              <div className="hidden   md:grid md:grid-cols-2  gap-4">
                <Button
                  onClick={() => {}}
                  className="rounded-[2px] h-10 border-1 font-medium w-32 "
                >
                  Update Cart
                </Button>
                <Button
                  onClick={() => {
                    dispatch(deleteAllProductCart());
                  }}
                  className="rounded-[2px] h-10 border-1 border-[#db4444] text-[#db4444] font-medium w-32 "
                >
                  Remove all
                </Button>
              </div>
              <div className="flex items-center gap-2 md:hidden">
                <RotateCw className="rotate-90" />
                <Trash2
                  className="text-[#db4444]"
                  onClick={() => {
                    dispatch(deleteAllProductCart());
                  }}
                />
              </div>
            </div>
          </div>
          <div className="mt-10  grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="grid grid-cols-2 gap-10 ">
              <input
                type="text"
                className="border-1 h-10 w-40 md:w-48 placeholder:text-center"
                placeholder="Coupon Code"
              />
              <Button className="border-[#db4444] text-[#db4444] w-20 md:w-32 border-1 rounded-[2px] h-10  ">
                Apply
              </Button>
            </div>
            <div className="border-1 flex flex-col text-start space-y-6 place-content-center p-2  w-72 rounded-[2px] ">
              <h1 className="font-bold">Cart Total</h1>
              <div className="flex flex-col justify-center space-y-2 border-b-2 border-gray-400/80">
                <div className="flex justify-between items-center">
                  <h4>Subtotal</h4>
                  <span className="font-medium">{totalPrice}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <h4>Shipping</h4>
                  <span className="font-medium">Free</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h2 className="font-medium">Total</h2>
                <span>{totalPrice}</span>
              </div>
              <Button
                onClick={() => navigate("/checkout")}
                className="bg-[#db4444] rounded-[2px] text-white"
              >
                Procces to Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
