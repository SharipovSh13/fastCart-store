import { lazy } from "react";

export const Layout = lazy(() => import("@/app/provider/layout/layout"));
export const Home = lazy(() => import("@/pages/home/home"));
export const Login = lazy(() => import("@/pages/login/login"));
export const SignUp = lazy(() => import("@/pages/registration/signUp"));
export const NotFound = lazy(() => import("@/pages/error/notFound"));
export const AboutUs = lazy(() => import("@/pages/about/about-us"));
export const Account = lazy(() => import("@/pages/account/account"));
export const Cart = lazy(() => import("@/pages/cart/cart"));
export const Checkout = lazy(() => import("@/pages/chekout/checkout"));
export const Contact = lazy(() => import("@/pages/contact/contact"));
export const Products = lazy(() => import("@/pages/products/pageProducts"));
export const WeshList = lazy(() => import("@/pages/wishlist/wishlist"));
export const Profile = lazy(() => import("@/pages/profile/profile"));
export const Info = lazy(() => import("@/pages/info/info"));
