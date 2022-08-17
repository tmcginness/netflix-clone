import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { usetheme } from '@mui/styles';
import { useTheme } from '@emotion/react';

import useStyles from './styles';

const categories = [
  {
    label: 'Popular', value: 'popular',
  },
  {
    label: 'Top Rated', value: 'top_rated',
  },
  {
    label: 'Upcoming', value: 'upcoming',
  },
];
const mockCategories = [
  {
    label: 'Comedy', value: 'comedy',
  },
  {
    label: 'Horror', value: 'horror',
  },
  {
    label: 'Action', value: 'action',
  },
  {
    label: 'Drama', value: 'drama',
  },
];

const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <>
      <Link
        to="/"
        className="classes.imageLink"
      >
        <img src={theme.palette.mode === 'light' ? redLogo : blueLogo} className={classes.image} alt="Filmpire Logo" />
      </Link>
      <Divider />
      <List>
        <ListSubheader>
          Categories
        </ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              {/* <ListItemIcon>
                <img src={redLogo} className={classes.genreImages} height={30} />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>
          Categories
        </ListSubheader>
        {mockCategories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              {/* <ListItemIcon>
                <img src={redLogo} className={classes.genreImages} height={30} />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
