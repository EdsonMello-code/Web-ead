import axios from "axios";

const api  = axios.create({ baseURL: 'https://nodeead.herokuapp.com/' });

export default api;