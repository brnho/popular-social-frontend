import axios from "axios";
const instance = axios.create({
    baseURL: "https://popular-social-mern-58513fcfb58a.herokuapp.com/",
});
export default instance;
