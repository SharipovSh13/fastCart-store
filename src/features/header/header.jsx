import { Heart, Menu, Search, ShoppingCart, User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {

    return <>
        <header aria-label="Навигация на верх страницы" className=" shadow-[0px_0px_5px_0px] shadow-gray-400/40" >

            <div className=" hidden md:grid grid-cols-[55%_40%]">
                <div className="grid grid-cols-[35%_55%] place-content-center items-center ">

                    <Link to={'/'}>
                        <img src="/Group 1116606595.png" alt="лого магазина" className="m-auto" />

                    </Link>

                    <div className=" ml-2">
                        <nav className="  bg-white grid  grid-cols-4  justify-items-center ">
                            <h1>
                                <NavLink to="/" end
                                    className={({ isActive }) => isActive ? "active-link" : ""}>
                                    Home
                                </NavLink>
                            </h1>
                            <h1>
                                <NavLink to='contact' end className={({ isActive }) => isActive ? 'active-link' : ""} >Contact
                                </NavLink>
                            </h1>

                            <h1>
                                <NavLink to='about' end
                                    className={({ isActive }) => isActive ? "active-link" : ""} >About</NavLink>
                            </h1>

                            <h1>
                                <NavLink to='registration' end className={({ isActive }) => isActive ? 'active-link' : ""}>Sign Up</NavLink>
                            </h1>
                        </nav>
                    </div>
                </div>

                <div className="grid grid-cols-[80%_25%] items-center ">

                    <div className="  flex items-center w-fit bg-gray-100 m-auto p-0.5">
                        <input type="search" name="inputSearch" id="" placeholder="What are you looking for?" className="w-fit p-0.5 bg-gray-100 placeholder:text-sm " />
                        <Search />
                    </div>

                    <div className="grid grid-cols-3">
                        <Link to={'wishlist'}>
                            <Heart />
                        </Link>

                        <Link className="flex items-center " to={"cart"}>
                            <ShoppingCart />
                            <span className="bg-red-600 w-fit items-center  text-white text-[10px]">0</span>
                        </Link>

                        <Link to={'login'}>
                            <User />

                        </Link>

                    </div>
                </div>

            </div>
            <div className="p-[20px] w-[98%] grid grid-cols-[80%_25%] items-center  ">
                <div className="flex items-center justify-items-center gap-[4px]">
                    <Menu strokeWidth={1.2} size={28} className="mt-1" />
                    <h1 className="text-[24px] font-bold">Exclusive</h1>
                </div>
                <div className="grid grid-cols-2  items-center ">
                    <div className="flex items-center relative">
                    <ShoppingCart strokeWidth={1.2} size={24}/>
                    <span className="bg-red-500 text-white w-fit absolute left-4 bottom-2">0</span>
                    </div>
                    <User strokeWidth={2} size={24}/>
                </div>

            </div>



        </header>
    </>
}