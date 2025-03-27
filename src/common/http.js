import axios from "axios";
import { baseURL } from "../utilities/constants";

const http = axios.create({
    baseURL: baseURL,
    
});

export default http;