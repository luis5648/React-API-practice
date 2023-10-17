import { useEffect, useState } from "react";
import GhibliService from "../api/GhibliService";
import IGhibliData from "../api/GhibliData";
import React from "react";

/*const [AllInfo, setInfo] = useState([]);
  

  useEffect(() => {
    async function loadInfo() {
      const res = await getInfo();
      setInfo(res.data);
    }
    loadInfo();
  }, []);
*/
const FilmList: React.FC = () => {
  const [films, setFilms] = useState<Array<IGhibliData>>([]);

  useEffect(() => {
    RetreiveFilms();
  }, []);

  const RetreiveFilms = () => {
    GhibliService.getAll()
      .then((response: any) => {
        setFilms(response.data);
        //to test:
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return (
    <div>
      {films.map((film) => (
        <ul key={film.id}>
          <li>
            {film.title} <p>{film.description}</p>
          <img src="{film.image}" alt="imagen"/>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default FilmList;
