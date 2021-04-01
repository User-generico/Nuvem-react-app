import axios from "axios";

const api = axios.create({
    baseURL: "https://nuvemm.herokuapp.com"
})

export default api;