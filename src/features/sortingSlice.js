import { createSlice } from "@reduxjs/toolkit";

// defined a slice to manage sorting
const sortingSlice = createSlice({
  name: "sort",
  initialState: "",
  reducers: {
    // setSorting is used to set the "sort" which enables sorting of the images
    setSorting: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSorting } = sortingSlice.actions;
export default sortingSlice.reducer;
