import Footer from "@/widgets/footer/footer";
import Header from "@/widgets/header/header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function Layout() {
  return (
    <>
      <div className="max-w-[1280px]  w-[99.9%] m-auto">
        <Header />
        <div>
          <div>
            <Toaster position="top-right" reverseOrder={false} />
          </div>
          <Outlet />
        </div>

        <Footer />
      </div>
    </>
  );
}
