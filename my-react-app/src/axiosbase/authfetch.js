import axios from "axios";

const authFetch = axios.create( {
baseURL : "http://localhost:4000"
     
})
let d =localStorage.getItem("token");

authFetch.interceptors.request.use((request)=>{

    request.headers.Authorization = "Bearer " + d;
    return request;


},(errro)=>{

    return Promise.reject(errro);

})


authFetch.interceptors.response.use((r)=>{

    if(r.status == "")
    {

    }
    console.log(r);
    return r;


},(errro)=>{

    return Promise.reject(errro);

})

export default authFetch;