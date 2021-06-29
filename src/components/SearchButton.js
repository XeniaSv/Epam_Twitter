import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import firebase from 'firebase';
import 'firebase/firestore';

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

  componentDidMount() {
    const db = firebase.firestore();
    db.collection('users')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const { users } = this.state;
          const array = users.slice();
          array.push({ id: doc.id });
          this.setState({ users: array });
        });
      });
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
      window.open(`${process.env.PUBLIC_URL}/search?searchValue=${value}`, '_self');
    } else if (
      value.length !== 0
      && !users.some((doc) => doc.id === value)
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
