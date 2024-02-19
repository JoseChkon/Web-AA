import axios from './axios.js'

export const userRequest = () => axios.get("/auth/user");