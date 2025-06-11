import EmailCompany from "@/shared/components/custom/companyEmail/email";
import CompanyPhone from "@/shared/components/custom/companyNumber/phoneNumber";
import { Facebook, Instagram, Linkedin, SendHorizonal, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
    return <footer aria-label="Дополнительные ссылки и информация">
        <div className="justify-items-start items-center grid grid-cols-1 md:grid-cols-3  lg:grid-cols-[20%_20%_35%_20%]  gap-x-4  pt-4 text-white m-auto bg-slate-900 min-h-fit h-60 gap-y-6">
            <div className=" m-auto flex-col space-y-2">
                <h1 className="text-xl font-medium">Eclusive</h1>
                <div className="space-y-3">
                    <h3>Subscribe</h3>
                    <span className="text-muted text-sm">Get 10% off your first order</span>
                    <div className="flex mt-2 items-center h-[40px] p-0.5 border-1 ">
                        <input type="email" name="" id="" placeholder="Enter your email" className="p-0.5 w-[150px] border-none" />
                        <SendHorizonal strokeWidth={1.3} size={24} />
                    </div>
                </div>
            </div>
            <div className=" m-auto  flex-col space-y-3 ">
                <h3 className="text-xl font-medium">Support</h3>
                <h3 className="text-muted text-sm">
                    111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.<br />
                </h3>
                <EmailCompany />
                <CompanyPhone />
            </div>
            <div className="flex w-[80%] m-auto justify-between">
                <div className=" m-auto flex-col space-y-2">
                    <h3 className="text-xl font-medium">Account</h3>
                    <div className="flex flex-col space-y-2 ">
                        <Link to={'account'}>
                            My Account
                        </Link>
                        <Link to={'cart'}>
                            Cart
                        </Link>
                        <Link to={"wishlist"}>
                            Wishlist
                        </Link>
                        <Link to={'products'}>
                            Shop
                        </Link>

                    </div>

                </div>
                <div className=" space-y-2">
                    <h3 className="text-xl font-medium">Quick Link</h3>
                    <div className="flex flex-col space-y-2">
                        <Link to={'/'}>
                            Privacy Policy
                        </Link>
                        <Link to={''}>
                            Terms Of Use
                        </Link>
                        <Link to={''}>
                            FAQ
                        </Link>
                        <Link to={'contact'}>
                            Conatct
                        </Link>
                    </div>
                </div>

            </div>
            <div className="w-[50%] m-auto mt-10 flex flex-col space-y-3">
                <h3 className="text-xl font-medium">Social</h3>
                <div className="w-[100%] grid grid-cols-4 m-auto">
                    <Facebook strokeWidth={1.3} size={24} />
                    <Twitter strokeWidth={1.3} size={24} />
                    <Instagram strokeWidth={1.3} size={24} />
                    <Linkedin strokeWidth={1.3} size={24} />
                </div>
            </div>
        </div>

    </footer>
}