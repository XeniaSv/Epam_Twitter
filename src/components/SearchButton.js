import { pathSearch } from '../config';
import GetUsersId from '../helpers/GetUsersId';

import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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

class SearchButton extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    const array = await GetUsersId();
    this.setState({ users: array });
  }

  handlerOnClick = () => {
    const value = document
      .querySelector('.search-text-field')
      .querySelector('input')
      .value.trim();
    const { users } = this.state;
    if (
      value.length !== 0
      && users.some((doc) => doc.id === value)
    ) {
      window.open(`${process.env.PUBLIC_URL}#${pathSearch}?searchValue=${value}`, '_self');
      window.location.reload();
    } else if (
      value.length !== 0
    ) {
      alert('Данного пользователя невозможно найти.');
    }
  };

  render() {
    return (
      <MuiThemeProvider theme={blueTheme}>
        <Button
          className="search-button"
          variant="contained"
          color="primary"
          onClick={this.handlerOnClick}
        >
          Найти
        </Button>
      </MuiThemeProvider>
    );
  }
}
export default SearchButton;
