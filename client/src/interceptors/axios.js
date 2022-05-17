import axios from "axios";

axios.defaults.baseURL = "http://localhost:9002";

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`