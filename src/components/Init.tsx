//MUI imports
import { Container } from "@mui/system";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { useEffect, useState } from "react";
import GhibliService from "../api/GhibliService";
import IGhibliData from "../interfaces/GhibliData";
import React from "react";
import ShowMore from "./ShowMore";

const FilmList: React.FC = () => {
  const [films, setFilms] = useState<Array<IGhibliData>|null>(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    retreiveFilms();
  }, []);

  const retreiveFilms = () => {
    GhibliService.getAll()
      .then((response: any) => {
        setFilms(response.data);
        //to test:
        //console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return (
    <Box id="contentApp">
      <Typography gutterBottom variant="h3" component="div">
        Ghibli Films
      </Typography>
      <Box sx={{ flexGrow: 1, m: 4 }}>
        <Grid container rowSpacing={8} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {films?.map((film) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={film.id}>
              <Card sx={{ maxWidth: 340 }}>
                <Card id="cards">
                  <CardMedia
                    component="img"
                    height="345"
                    image={film.image}
                    alt="image"
                    sx={{ m: 1 }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {film.title}
					</Typography>  
					<ShowMore limit={50}>
                      {film.description}
					</ShowMore>
                  </CardContent>
                </Card>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FilmList;
