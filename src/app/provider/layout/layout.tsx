import Footer from "@/widgets/footer/footer";
import Header from "@/widgets/header/header";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return <>
        <div className="max-w-[1280px]  w-[99.9%] m-auto">
            
            <Header />
            <div>
            <Outlet />

            </div>


            <Footer />

        </div>
    </>
}