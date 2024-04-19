import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// creating an API using Redux Toolkit query
export const photosApi = createApi({
  reducerPath: "photosApi",
  // setting the base query with the base url
  baseQuery: fetchBaseQuery({ baseUrl: "https://pixabay.com/api/" }),
  endpoints: (builder) => ({
    // defined endpoint for getting the photos including the selected "category"
    getPhotos: builder.query({
      query: (category) =>
        `?key=25540812-faf2b76d586c1787d2dd02736&q=${category}`,
    }),
  }),
});

export const { useGetPhotosQuery } = photosApi;
