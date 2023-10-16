import axios from "axios";

export default axios.create({
  baseURL: "https://ghibliapi.vercel.app/films",
  headers: {
    "Content-type": "application/json"
  }
});

/*
export const getInfo = () => {
    return axios.get('https://ghibliapi.vercel.app/films')
}

*/
