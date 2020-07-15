import axios from'axios';
const api = axios.create({
    baseUrl: "https://api.unsplash.com/",
    header: {
        Authorization: 'Client-ID hjnDOLTYqqDwfqK3x3RiMILDDqM07BMsaDJO5MkXoe0'
    }
});
export default api;