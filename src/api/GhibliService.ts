import IGhibliData from "./GhibliData";
import Data from "./ghibli_api";

const getAll = () =>{
    return Data.get<Array<IGhibliData>>("/films");
};


const GhibliService = {
    getAll
};


export default GhibliService;