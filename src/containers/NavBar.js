import SearchField from '../components/SearchField';

import { pathHome } from '../config';

import useStyles from '../helpers/NavBarStyles';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SearchIcon from '@material-ui/icons/Search';

import React from 'react';

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <AppBar color="#42a5f5" className={classes.root}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inheru"
          href={`${process.env.PUBLIC_URL}#${pathHome}`}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6" noWrap>
          Mini Twitter
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <SearchField className={classes.inputInput} />
        </div>
      </Toolbar>
    </AppBar>
  );
}
