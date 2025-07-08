import Badgers from "@/shared/ui/custom/badgeComponent/badGers";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../shared/lib/utils/token";

import {
  Heart,
  Menu,
  Search,
  ShoppingCart,
  User,
  ShoppingBag,
  LogOut,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getCart, deleteAllProductCart } from "../../entities/cart/api/cartApi";

export default function Header() {
  const navigate = useNavigate();
  const { cartData } = useSelector((state) => state.cart);
  const { wishlistProducts } = useSelector((state) => state.wishlist);

  const dispatch = useDispatch();
  const productsInCart = cartData?.[0]?.productsInCart ?? [];
  const [accountModal, setAccountModdal] = useState(false);
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const userNavigateLoginFunction = () => {
    const token = localStorage.getItem("access_token");
    if (token) {
      navigate("account");
    } else {
      navigate("/login");
    }
    setAccountModdal(!accountModal);
  };
  const userNavigateOrderFunction = () => {
    navigate("/checkout");
    setAccountModdal(!accountModal);
  };
  const userNavigateWishlistFunction = () => {
    navigate("/wishlist");
    setAccountModdal(!accountModal);
  };
  const userLogoutFunction = () => {
    removeToken();
    navigate("/");
    dispatch(getCart());
    setAccountModdal(!accountModal);
    dispatch(deleteAllProductCart());
    console.log("navigated");
  };
  return (
    <>
      <header
        aria-label="Навигация на верх страницы"
        className=" shadow-[0px_0px_5px_0px] shadow-gray-400/40 m-auto"
      >
        <div className=" hidden lg:grid grid-cols-[55%_40%]">
          <div className="grid grid-cols-[35%_55%] place-content-center items-center ">
            <Link to={"/"}>
              <img
                src="/Group 1116606595.png"
                alt="лого магазина"
                className="m-auto"
              />
            </Link>

            <div className=" ml-2">
              <nav className="  bg-white grid  grid-cols-4  justify-items-center ">
                <h1>
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    Home
                  </NavLink>
                </h1>
                <h1>
                  <NavLink
                    to="contact"
                    end
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    Contact
                  </NavLink>
                </h1>

                <h1>
                  <NavLink
                    to="about"
                    end
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    About
                  </NavLink>
                </h1>

                <h1>
                  <NavLink
                    to="registration"
                    end
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    Sign Up
                  </NavLink>
                </h1>
              </nav>
            </div>
          </div>

          <div className="grid grid-cols-[80%_25%] items-center ">
            <div className="  flex items-center w-fit bg-gray-100 m-auto p-0.5">
              <input
                type="search"
                name="inputSearch"
                id=""
                placeholder="What are you looking for?"
                className="w-fit p-0.5 bg-gray-100 placeholder:text-sm "
              />
              <Search />
            </div>

            <div className="grid grid-cols-3">
              <Link to={"wishlist"} className="relative">
                <Heart className="relative z-1" />
                <Badgers props={wishlistProducts.length} />
              </Link>

              <Link className="flex items-center relative " to={"cart"}>
                <ShoppingCart className="z-1" />
                <Badgers props={productsInCart.length} />
              </Link>

              <User onClick={() => setAccountModdal(!accountModal)} />
            </div>
          </div>
        </div>

        <div className="p-[20px] w-[98%] grid grid-cols-[80%_25%] items-center  lg:hidden ">
          <div className="flex items-center justify-items-center gap-[4px]">
            <Menu strokeWidth={1.2} size={28} className="mt-1" />
            <h1 className="text-[24px] font-bold">Exclusive</h1>
          </div>
          <div>
            <div className="grid grid-cols-2  items-center ">
              <div className="flex items-center relative">
                <Link to={"cart"} className="">
                  <ShoppingCart
                    strokeWidth={1.2}
                    size={26}
                    className="relative z-1"
                  />
                  <Badgers props={productsInCart.length} />
                </Link>
              </div>
              <User
                strokeWidth={2}
                size={24}
                onClick={() => {
                  setAccountModdal(!accountModal);
                }}
              />
            </div>
          </div>
        </div>
        {accountModal && (
          <div className=" *: text-gray-300 flex flex-col p-1 bg-black/80 rounded shadow shadow-black h-fit  w-40 absolute top-22 z-30 right-8 space-y-4">
            <div
              className="flex items-center gap-2 w-[70%]   m-auto mt-2 mb-2 "
              onClick={() => userNavigateLoginFunction()}
            >
              <User size={20} />
              <h4>Account</h4>
            </div>
            <div
              className=" flex items-center gap-2 w-[70%]  m-auto mt-2 mb-2"
              onClick={() => {
                userNavigateOrderFunction();
              }}
            >
              <ShoppingBag size={20} className="" />
              <h4>My order</h4>
            </div>

            <div
              className="md:hidden flex items-center gap-2 w-[70%]  m-auto nt-2 mb-2"
              onClick={() => userNavigateWishlistFunction()}
            >
              <Heart size={20} />
              <h4>Wishlist</h4>
            </div>

            <div
              className="flex items-center gap-2 w-[70%] m-auto"
              onClick={() => userLogoutFunction()}
            >
              <LogOut size={20} className="rotate-180" />
              <h4>Logout</h4>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
