import blue from '@material-ui/core/colors/blue';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import {
  MuiThemeProvider,
  createMuiTheme,
  makeStyles,
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import InfoIcon from '@material-ui/icons/Info';

import React from 'react';

const blueTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: blue[400],
      dark: '#002884',
      contrastText: '#fff',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(3),
    fontFamily: ['Open Sans', 'serif'].join(','),
  },
}));

function InfoButton() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <MuiThemeProvider theme={blueTheme}>
      <IconButton id="info-button" color="primary" onClick={handleClick}>
        <InfoIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>
          Это приложение отображает твиты разных пользователей. Вам нужно ввести
          точный Ник профиля и нажать на кнопку Найти
        </Typography>
      </Popover>
    </MuiThemeProvider>
  );
}

export default InfoButton;
