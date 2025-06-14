import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { SERVER_URL } from "../../shared/constants/api";

const shouldSimulateError = () => {
  const randomNumber = Math.random();
  return randomNumber < 0.15;
};

export const useFakeBaseQuery = fetchBaseQuery({
  baseUrl: SERVER_URL,
});
