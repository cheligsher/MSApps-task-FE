import { createSlice } from "@reduxjs/toolkit";

// defined a slice to manage the category selection
const categorySlice = createSlice({
  name: "category",
  initialState: "",
  reducers: {
    // setCategory is used to update the category
    setCategory: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;
