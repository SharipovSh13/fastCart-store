import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AboutUs,
  Account,
  Cart,
  Checkout,
  Contact,
  Home,
  Info,
  Layout,
  Login,
  NotFound,
  Products,
  Profile,
  SignUp,
  WeshList,
} from "../lazy/lazy";
import { Suspense } from "react";
import Loading from "@/shared/ui/custom/loading/loading";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <Layout />
              </Suspense>
            }
          >
            <Route path="*" element={<NotFound />} />

            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="account" element={<Account />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="products" element={<Products />} />
            <Route path="profile" element={<Profile />} />
            <Route path="info/:id" element={<Info />} />
            <Route path="wishlist" element={<WeshList />} />

            <Route path="login" element={<Login />} />
            <Route path="registration" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
