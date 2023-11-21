//MUI imports
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { Container } from "@mui/system";

import { useEffect } from "react";
import React from "react";
import ShowMore from "./ShowMore";

//redux
import { useAppSelector } from "../redux/Store";
import { fetchFilms } from "../redux/features/fetchInfo/fetchFilmsSlice";
import { useAppDispatch } from "../redux/Store";

const FilmList = () => {
  const dispatch = useAppDispatch();
  const films = useAppSelector((state) => state.films.films);

  //to debug status state
  const filmsStatus = useAppSelector((state) => state.films.status);
  console.log(filmsStatus);
  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);
  return (
    <Container fixed>
      <Typography gutterBottom variant="h3" component="div" sx={{ m: 2 }}>
        Ghibli Films
      </Typography>
      <Box sx={{ flexGrow: 1, m: 4 }}>
        <Grid container rowSpacing={8} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {films?.map((film) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={film.id}>
              <Card sx={{ maxWidth: 340 }}>
                  {filmsStatus !== "succeded" ? (
                    <Skeleton animation="wave" width={340} height={345} />
                  ) : (
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
                      <Typography gutterBottom variant="h6" component="div">
                        {film.original_title}
                      </Typography>
                      <ShowMore limit={50}>{film.description}</ShowMore>
                    </CardContent>
                </Card>
                  )}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default FilmList;
