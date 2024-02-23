import axios from './axios.js'

export const userRequest = () => axios.get("/auth/user",{headers: {'Access-Control-Allow-Origin': '*'}});

export const logoutRequest = () => axios.delete("/auth/logout")
