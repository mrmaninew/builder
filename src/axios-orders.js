import axios from "axios";

const instance = axios.create({
  baseURL: "https://builder-3a358.firebaseio.com/"
});

export default instance;
