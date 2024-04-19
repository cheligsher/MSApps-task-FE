import { createSlice } from "@reduxjs/toolkit";

// defined a slice to manage the pagination
const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    currentPage: 1,
  },
  reducers: {
    // nextPage is used to increase the current page number
    nextPage: (state) => {
      state.currentPage += 1;
    },
    // prevPage is used to decrease the current page number
    prevPage: (state) => {
      if (state.currentPage > 1) {
        state.currentPage -= 1;
      }
    },
  },
});

export const { nextPage, prevPage } = paginationSlice.actions;
export default paginationSlice.reducer;
