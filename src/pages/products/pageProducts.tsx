import NewBreadUi from "../../shared/ui/custom/newBreadUi/newBreadUi";
import SearchUi from "../../shared/ui/custom/searchUi/searchUi";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  AccordionProd,
  AccordionContentProd,
  AccordionItemProd,
  AccordionTriggerProd,
} from "@/shared/ui/custom/productsAccordion/productsAccordion";
import { Button } from "../../shared/ui/kit/button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../entities/category/api/categoryApi";
import {
  getProducts,
  getProductsFilter,
  getBrandsFilter,
  maxGetProducts,
} from "../../entities/products/api/productApi";
import { getBrands } from "../../entities/brand/api/brandApi";
import { AlignLeft, Funnel, X, Star, Heart, Eye } from "lucide-react";
import { Input } from "../../shared/ui/kit/input";
import { ProductCard } from "../../shared/components/productCard/productCard";

export default function ProductsPage() {
  const categories = useSelector((state) => state.categories.data);
  const { products } = useSelector((state) => state.products);
  const { brandsData } = useSelector((state) => state.brands);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchCategory, setSearchcategory] = useState("");
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("access_token"));
  }, []);

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getProducts());
    dispatch(getProductsFilter());
    dispatch(getBrandsFilter());
    dispatch(getBrands());
  }, [dispatch]);

  const handleAddToCart = () => {
    if (!token) {
      toast.error("Avval Registratsya kuned");
      navigate("/registration");
      return;
    }
    if (product.quantity <= 0) {
      toast.error("Mahsulot ba itmom rasid ");
      return;
    }
    dispatch(addToCart(product.id));
    toast.success("Mahsulot gundoshta shud");
  };

  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllBrands, setShowAllBrands] = useState(false);

  const [minPriceInp, setMinpriceInp] = useState("");
  const [maxPriceInp, setMaxPriceInp] = useState("");

  const handleMinPriceGet = () => {
    dispatch(maxGetProducts({ min: minPriceInp, max: maxPriceInp }));
  };

  return (
    <>
      <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 gap-1  mt-2 md:mt-8">
        <NewBreadUi href={"products"} isEnd={"Our Products"} />
        <SearchUi
          inpClassName={"h-12 w-[90%]"}
          divClassName={
            "flex items-center  mb-4 w-[80%] m-auto justify-between shadow-[0px_0px_6px_4px] shadow-gray-200 bg-gray-50/50 p-1"
          }
        />

        <div className=" md:hidden flex flex-wrap gap-2 w-[80%] m-auto mb-4">
          <Button className="rounded-[5px] border-1 border-gray-300">
            Populary <AlignLeft />
          </Button>
          <Button className="rounded-[5px] border-1 border-gray-300">
            Filter (3)
            <Funnel />
          </Button>
          <Button className="rounded-[5px] border-1 border-gray-300">
            All Products
            <X />
          </Button>
          <Button className="rounded-[5px]  border-1 border-gray-300">
            Anny
            <X />
          </Button>
        </div>
      </div>

      <div
        className="w-[98%] m-auto grid
      grid-cols-1 md:grid-cols-[20%_75%] "
      >
        <div className="md:flex md:flex-col  hidden">
          <div className="w-[95%]">
            <AccordionProd
              type="single"
              collapsible
              className="bg-gray-50 border-b-2 p-1 border-gray-300/60
              "
              defaultValue="item-1"
            >
              <AccordionItemProd value="item-1">
                <AccordionTriggerProd className="">
                  Category
                </AccordionTriggerProd>
                <AccordionContentProd>
                  <p
                    className="mt-1 ml-2 font-medium text-[#db4444]"
                    onClick={() => {
                      dispatch(getCategory()), dispatch(getProducts());
                    }}
                  >
                    All Products
                  </p>
                  {categories
                    .slice(0, showAllCategories ? categories.length : 6)
                    .map((el) => {
                      return (
                        <p
                          key={el.id}
                          className="mt-1 ml-2 font-medium text-lg
                          "
                          onClick={() => dispatch(getProductsFilter(el.id))}
                        >
                          {el.categoryName
                            .slice(0, 1)
                            .toUpperCase()
                            .concat(
                              el.categoryName.slice(1, el.categoryName.length)
                            )}
                        </p>
                      );
                    })}
                  {categories.length > 6 && (
                    <span
                      className="mt-1 ml-2 font-medium text-[#db4444] cursor-pointer"
                      onClick={() => setShowAllCategories(!showAllCategories)}
                    >
                      {showAllCategories ? "Show Less" : "See All"}
                    </span>
                  )}
                </AccordionContentProd>
              </AccordionItemProd>
            </AccordionProd>
          </div>
          <div className="w-[95%]">
            <AccordionProd
              type="single"
              collapsible
              className="bg-gray-50 p-1 border-b-2 border-gray-300/60
              "
              defaultValue="item-2"
            >
              <AccordionItemProd value="item-1">
                <AccordionTriggerProd className="">Brands</AccordionTriggerProd>
                <AccordionContentProd>
                  {Array.isArray(brandsData) &&
                    brandsData
                      .slice(0, showAllBrands ? brandsData.length : 6)
                      .map((el) => {
                        return (
                          <div
                            key={el.id}
                            className="mt-1 ml-2 font-medium flex items-center gap-1"
                          >
                            <Input
                              type="checkbox"
                              className="w-4 "
                              onChange={() => dispatch(getBrandsFilter(el.id))}
                            />
                            <span>{el.brandName}</span>
                          </div>
                        );
                      })}
                  {Array.isArray(brandsData) && brandsData.length > 6 && (
                    <span
                      className="mt-1 ml-2 font-medium text-[#db4444] cursor-pointer"
                      onClick={() => setShowAllBrands(!showAllBrands)}
                    >
                      {showAllBrands ? "Show Less" : "See All"}
                    </span>
                  )}
                </AccordionContentProd>
              </AccordionItemProd>
            </AccordionProd>
          </div>
          <div className="w-[95%]">
            <AccordionProd
              type="single"
              collapsible
              className="p-1 bg-gray-50 border-b-2 border-gray-300/60
              "
              defaultValue="item-1"
            >
              <AccordionItemProd value="item-1">
                <AccordionTriggerProd>Features</AccordionTriggerProd>
                <AccordionContentProd>
                  <div className=" ml-2 font-medium flex items-center gap-1">
                    <Input type="checkbox" className="w-4 " />
                    <span>Metallic</span>
                  </div>
                </AccordionContentProd>
                <AccordionContentProd>
                  <div className=" ml-2 font-medium flex items-center gap-1">
                    <Input type="checkbox" className="w-4 " />
                    <span>Plastic Cover</span>
                  </div>
                </AccordionContentProd>
                <AccordionContentProd>
                  <div
                    className="
                   ml-2 font-medium flex items-center gap-1"
                  >
                    <Input type="checkbox" className="w-4 " />
                    <h1>8GB Ram</h1>
                  </div>
                </AccordionContentProd>
                <AccordionContentProd>
                  <div className=" ml-2 font-medium flex items-center gap-1">
                    <Input type="checkbox" className="w-4 " />
                    <span>Super power</span>
                  </div>
                </AccordionContentProd>
                <AccordionContentProd>
                  <div className=" ml-2 font-medium flex items-center gap-1">
                    <Input type="checkbox" className="w-4 " />
                    <span>Large Memory</span>
                  </div>
                </AccordionContentProd>
              </AccordionItemProd>
            </AccordionProd>
          </div>
          <div className="w-[95%]">
            <AccordionProd
              type="single"
              collapsible
              className="bg-gray-50 border-b-2 border-gray-300/60 p-1
              "
              defaultValue="item-1"
            >
              <AccordionItemProd value="item-1">
                <AccordionTriggerProd>Price range</AccordionTriggerProd>
                <AccordionContentProd>
                  <div className=" ml-2 font-medium  ">
                    <Input type="range" className="w-[100%] " />
                  </div>
                  <div className=" flex items-center gap-2">
                    <div className="flex flex-col  space-y-1">
                      <label htmlFor="">Min</label>
                      <Input
                        placeholder="min"
                        className="border rounded"
                        value={minPriceInp}
                        onChange={(e) => {
                          setMinpriceInp(e.target.value);
                        }}
                      />
                    </div>
                    <div className="flex flex-col  space-y-1 ">
                      <label htmlFor="">Max</label>
                      <Input
                        placeholder="Max"
                        value={maxPriceInp}
                        onChange={(e) => setMaxPriceInp(e.target.value)}
                        className="border rounded"
                      />
                    </div>
                  </div>
                  <Button
                    onClick={() => handleMinPriceGet()}
                    className="w-[100%] text-[#db4444] font-medium border-1 border-[#db4444] mt-2 ml-auto"
                  >
                    Apply
                  </Button>
                </AccordionContentProd>
              </AccordionItemProd>
            </AccordionProd>
          </div>
          <div className="w-[95%]">
            <AccordionProd
              type="single"
              collapsible
              className="p-1 bg-gray-50 border-b-2 border-gray-300/60
              "
              defaultValue="item-1"
            >
              <AccordionItemProd value="item-1">
                <AccordionTriggerProd>Condition</AccordionTriggerProd>
                <AccordionContentProd>
                  <div className=" ml-2 font-medium flex items-center gap-1">
                    <Input type="radio" className="w-4 " />
                    <span>Any</span>
                  </div>
                </AccordionContentProd>
                <AccordionContentProd>
                  <div className=" ml-2 font-medium flex items-center gap-1">
                    <Input type="radio" className="w-4 " />
                    <span>Refurbished</span>
                  </div>
                </AccordionContentProd>
                <AccordionContentProd>
                  <div
                    className="
                   ml-2 font-medium flex items-center gap-1"
                  >
                    <Input type="radio" className="w-4 " />
                    <h1>Brand New</h1>
                  </div>
                </AccordionContentProd>
                <AccordionContentProd>
                  <div className=" ml-2 font-medium flex items-center gap-1">
                    <Input type="radio" className="w-4 " />
                    <span>Old items</span>
                  </div>
                </AccordionContentProd>
              </AccordionItemProd>
            </AccordionProd>
          </div>
          <div className="w-[95%]">
            <AccordionProd
              type="single"
              collapsible
              className="p-1 bg-gray-50 border-b-2 border-gray-300/60
              "
              defaultValue="item-1"
            >
              <AccordionItemProd value="item-1">
                <AccordionTriggerProd>Ratings</AccordionTriggerProd>
                <AccordionContentProd>
                  <div className=" ml-2 font-medium flex items-center gap-1">
                    <Input type="checkbox" className="w-4 " />
                    <div className="flex items-center gap-0.5">
                      <Star className="drop-shadow drop-shadow-yellow-500 text-black/70 w-5" />
                      <Star className="drop-shadow drop-shadow-yellow-500 text-black/70 w-5" />
                      <Star className="drop-shadow drop-shadow-yellow-500 text-black/70 w-5" />
                      <Star className="drop-shadow drop-shadow-yellow-500 text-black/70 w-5" />
                      <Star className="drop-shadow drop-shadow-yellow-500 text-black/70 w-5" />
                    </div>
                  </div>
                </AccordionContentProd>
                <AccordionContentProd>
                  <div className=" ml-2 font-medium flex items-center gap-1">
                    <Input type="checkbox" className="w-4 " />
                    <div className="flex items-center gap-0.5">
                      <Star className="w-5 drop-shadow drop-shadow-yellow-500 text-black/70" />
                      <Star className="w-5 drop-shadow drop-shadow-yellow-500 text-black/70" />
                      <Star className="w-5 drop-shadow drop-shadow-yellow-500 text-black/70" />
                      <Star className="w-5 drop-shadow drop-shadow-yellow-500 text-black/70" />
                    </div>
                  </div>
                </AccordionContentProd>
                <AccordionContentProd>
                  <div
                    className="
                   ml-2 font-medium flex items-center gap-1"
                  >
                    <Input type="checkbox" className="w-4 " />

                    <div className="flex items-center gap-0.5">
                      <Star className="w-5 drop-shadow drop-shadow-yellow-500 text-black/70" />
                      <Star className="w-5 drop-shadow drop-shadow-yellow-500 text-black/70" />
                      <Star className="w-5 drop-shadow drop-shadow-yellow-500 text-black/70" />
                    </div>
                  </div>
                </AccordionContentProd>
                <AccordionContentProd>
                  <div className=" ml-2 font-medium flex items-center gap-1">
                    <Input type="checkbox" className="w-4 " />

                    <div className="flex items-center gap-0.5">
                      <Star className="w-5 drop-shadow drop-shadow-yellow-500 text-black/70" />
                      <Star className="w-5 drop-shadow drop-shadow-yellow-500 text-black/70" />
                    </div>
                  </div>
                </AccordionContentProd>
              </AccordionItemProd>
            </AccordionProd>
          </div>
        </div>

        <div className=" h-fit gap-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-20 lg:gap-y-12 place-content-center">
          {products?.products?.map((product) => {
            return (
              <div
                key={product.id}
                className=" w-[100%] md:w-fit p-2 group h-80
              "
              >
                <div className="bg-gray-100 w-full p-2 h-56">
                  <div className="w-60 m-auto mt-0.5 flex justify-between">
                    <div className="flex flex-col gap-2 ml-auto ">
                      <Heart className="h-6 w-6 bg-white rounded-full p-1" />
                      <Eye className="h-6 w-6 bg-white rounded-full p-1" />
                    </div>
                  </div>
                  <img
                    src={`http://37.27.29.18:8002/images/${product.image}`}
                    alt={product.productName}
                    className="w-full h-36 object-contain m-auto"
                  />
                </div>
                <div
                  onClick={() => handleAddToCart()}
                  className="relative inset-x-0 bottom-8 w-[100%] h-8 bg-black transform translate-y-full opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 text-white flex items-center justify-center cursor-pointer"
                >
                  Add To Cart
                </div>
                <div>
                  <h1 className="font-medium">{product.productName}</h1>
                  <p className="flex items-center gap-2">
                    <span className="text-[#DB4444] font-normal">
                      {product.price}
                    </span>
                    <span className="text-gray-400 line-through">
                      {product.price + 120}
                    </span>
                  </p>
                  <p className="flex items-center mt-2  gap-0.5">
                    {Array(5)
                      .fill()
                      .map((_, idx) => (
                        <Star
                          key={idx}
                          className={`w-4 h-4 ${
                            idx < product.rating
                              ? "text-yellow-600"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    <span className="font-medium ml-1">
                      {product.quantity > 0 ? (
                        `(${product.quantity})`
                      ) : (
                        <span className="text-red-500 animate-pulse">
                          Out of stock
                        </span>
                      )}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
