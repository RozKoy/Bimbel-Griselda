/* eslint-disable no-undef */
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api-backend",
});

export const axiosPrivateInstance = axios.create({
    baseURL: "http://localhost:3000/api-backend",
    headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
