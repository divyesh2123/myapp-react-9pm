import axios from "axios";

let d =localStorage.getItem("token");
const authFetch = axios.create({
    baseURL: "http://localhost:4000/",
    headers: {
        'Authorization': `bearer ${d}`
    }
});
export default authFetch;