import axios from "axios";

const Data = axios.create({
  baseURL: 'https://ghibliapi.vercel.app/',
  headers: {
    "Content-type": "application/json"
  }
});

export default Data;
/*
export const getInfo = () => {
    return axios.get('https://ghibliapi.vercel.app/films')
}

*/
