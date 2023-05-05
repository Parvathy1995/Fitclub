import { createSlice } from "@reduxjs/toolkit";
const initialState = {
userList:[]
};

const TestimonialSlice = createSlice({
  name: "Testimonials",
  initialState,
  reducers: {
    fetchTestimonialData: (state, action) => {
      return { ...state, userList: action.payload };
    },
  },
});
const { fetchTestimonialData } = TestimonialSlice.actions;
export { TestimonialSlice,fetchTestimonialData };
