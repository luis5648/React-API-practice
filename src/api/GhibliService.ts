import Ifilms from "../interfaces/GhibliData";
import Data from "./ghibli_api";

const getAll = () =>{
    return Data.get<Array<Ifilms>>("/films");
};


const GhibliService = {
    getAll
};


export default GhibliService;