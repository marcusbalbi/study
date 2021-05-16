import axios from "axios";

const jsonPlaceholder = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});


export default jsonPlaceholder;