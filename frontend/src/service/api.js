import axios from "axios";

const api = axios.create({ baseURL: "https://hackaton-squad9.herokuapp.com" });

export default api;
