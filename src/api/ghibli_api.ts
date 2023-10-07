import axios from "axios";

export const getInfo = () => {
    return axios.get('https://ghibliapi.vercel.app/films')
}