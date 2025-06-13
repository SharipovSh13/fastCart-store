import { AppDispatch, RootState } from "@/app/store/store";
import { getCategory } from "@/entities/category/api/categoryApi";
import { ICategory } from "@/shared/lib/interface";
import { AccordionContentCustom, AccordionCustom, AccordionItemCustom, AccordionTriggerCustom } from "@/shared/ui/kit/accordionNoChevron";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/ui/kit/accordion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

export default function AsideCategory() {
    const dispatch = useDispatch<AppDispatch>();
    const categories = useSelector((state: RootState) => state.categories.data) as ICategory[];

    useEffect(() => {
        dispatch(getCategory())
    }, [dispatch]);
    console.log(categories);
    return <>
        <div className="font-stretch-semi-expanded">
            <Accordion type="single" collapsible defaultValue="item-1" className="border-r-[1.5px] border-r-gray-300" >
                {categories.slice(0, 2).map((cat, index) => {
                    return <AccordionItem value={`item_${index}`} key={index} className="border-none">
                        <AccordionTrigger className="">
                            {cat.categoryName}

                        </AccordionTrigger>
                        <AccordionContent>
                            {cat.subCategories.map((sub, index,) => {
                                return <h2 key={index} >
                                    {
                                        sub.subCategoryName
                                    }
                                </h2>
                            })}
                        </AccordionContent>

                    </AccordionItem>
                })}
            </Accordion>


            <AccordionCustom type="single" collapsible>
                {categories.slice(2).map((cat, index) => {
                    return <AccordionItemCustom key={index} className="border-b-0 border-r-[1.5px] border-gray-300 " value={`item_${index}`}>
                        <AccordionTriggerCustom>
                            {cat.categoryName}  


                        </AccordionTriggerCustom>
                        <AccordionContentCustom>
                            {cat.subCategories.map((sub, index, ) => {
                                return <AccordionContent key={index}>
                                    {
                                        sub.subCategoryName
                                    }
                                </AccordionContent>
                                
                              
                            })}
                        </AccordionContentCustom>
                    </AccordionItemCustom>
                })}

            </AccordionCustom>

        </div>

    </>
}