import { createApi } from "@reduxjs/toolkit/query/react";
import { useFakeBaseQuery } from "../../hooks/useFakeBaseQuery";

export const splitAPI = createApi({
  baseQuery: useFakeBaseQuery,
  endpoints: () => ({}),
});
