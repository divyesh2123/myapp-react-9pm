import axios from "axios";

let d =localStorage.getItem("token");
axios.defaults.headers.common.Authorization = `Bearer ${d}`
axios.defaults.baseURL  = "http://localhost:4000/";