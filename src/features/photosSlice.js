import { createSlice } from "@reduxjs/toolkit";

// defined a slice to manage the photos
const photosSlice = createSlice({
  name: "photos",
  initialState: {
    data: [], // Initial state for photos data
  },
  reducers: {
    // setPhotos is used to update the photos with the fetched/ recent data
    setPhotos: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setPhotos } = photosSlice.actions;
export default photosSlice.reducer;
