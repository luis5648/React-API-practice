import IGhibliData from "./GhibliData";
import http from "./ghibli_api";

const getAll = () =>{

    return http.get<Array<IGhibliData>>("/films");
};


const GhibliService = {
    getAll
};


export default GhibliService;