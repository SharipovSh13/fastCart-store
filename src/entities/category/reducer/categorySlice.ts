import { createSlice } from "@reduxjs/toolkit";
import { getCategory } from "../api/categoryApi";

export const categorySlice = createSlice({
    name: "categories",
    initialState:{
        data:[],
    },
    reducers:{},
    extraReducers: builder =>{
        builder.addCase(getCategory.fulfilled,(state, action)=>{
            state.data=action.payload
        })
    }

})
export default categorySlice.reducer