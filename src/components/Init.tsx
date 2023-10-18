//MUI imports
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

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
      <h2>Ghibli Films</h2>
      <Box sx={{ flexGrow: 1, m: 4 }}>
        <Grid container rowSpacing={8} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {films.map((film) => (
            <Grid item xs={2} key={film.id}>
              <Card sx={{ maxWidth: 340 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="345"
                    image={film.image}
                    alt="image"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {film.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {film.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default FilmList;
