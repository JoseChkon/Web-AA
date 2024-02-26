import axios from "./axios.js";

export const userRequest = () => axios.get("/auth/user");

export const logoutRequest = () => axios.delete("/auth/logout");

export const loginRequest = (data) => {
  return axios.post("/auth/login", data);
};

export const registerRequest = (data) => axios.post("/auth/register", data);

export const authenticate = (data) => {
  return axios.get("/auth/authenticate", {headers: {"Authorization": data}})}