/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Grid, Grow, Tooltip, Rating, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useGetMoviesQuery } from '../../services/TMDB';
import { MovieList } from '..';
import useStyles from './styles';

const Movie = ({ movie, i }) => {
  const classes = useStyles();
  console.log(movie, i);

  return (
    <Grid item xs={12} sm={12} md={4} lg={3} xl={2} className={classes.movie}>
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Link className={classes.links} to={`/movie/${movie.id}`}>
          <img alt={movie.title} className={classes.image} src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://www.fillmurray.com/200/300'} />

          <Typography className={classes.title} variant="h5">{movie.title}</Typography>
          <Tooltip disableTouchListener title={`${movie.vote_average} out of 10`}>
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  );
};

export default Movie;
