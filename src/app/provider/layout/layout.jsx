import Footer from "@/features/footer/footer";
import Header from "@/features/header/header";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return <>
        <div className="max-w-[1280px] m-auto w-[99.9%]">

            <Header />

            <Outlet />

            <Footer />

        </div>
    </>
}