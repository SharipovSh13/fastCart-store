import { AppDispatch, RootState } from "@/app/store/store";
import { getCategory } from "@/entities/category/api/categoryApi";
import { ICategory } from "@/shared/lib/interface";
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
        <div>
            <h1>Категории</h1>
            {categories.map((cat, index) => {
                return <h1 key={index}>
                    {cat.categoryName}

                </h1>
            })}

        </div>

    </>
}