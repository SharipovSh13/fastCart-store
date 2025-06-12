import  categoryReducer  from "@/entities/category/reducer/categorySlice";
import { configureStore } from "@reduxjs/toolkit";

export const  store = configureStore(
    {
        reducer:{
                categories:categoryReducer
        }
    }
)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch