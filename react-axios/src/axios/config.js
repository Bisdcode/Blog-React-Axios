import axios from "axios"

// padronização da URL
const blogFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Type": "application/json",
    },
});

export default blogFetch;