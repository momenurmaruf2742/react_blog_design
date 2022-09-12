import axios from "axios"


export const axiosInsrance = axios.create({
    baseURL: "https://marufbolg.herokuapp.com/api/"
})