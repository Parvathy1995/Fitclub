import { configureStore } from "@reduxjs/toolkit";
import { HomeSlice } from "../Screens/Home/reducer";
import { TestimonialSlice } from "../Screens/Testimonials/reducer";

export const store = configureStore({
  reducer: {
    HomeReducer: HomeSlice.reducer,
    TestimonialReducer:TestimonialSlice.reducer
  },
});
