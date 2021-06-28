import './FirstPage.css';

import InfoButton from '../components/InfoButton';
import SearchButton from '../components/SearchButton';

import twitterImg from '../resource/twitter.svg';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import firebase from 'firebase';
import 'firebase/firestore';

import React from 'react';

class FirstPage extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
    this.keyPress = this.keyPress.bind(this);
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

  keyPress(e) {
    const value = document
      .querySelector('.search-text-field')
      .querySelector('input')
      .value.trim();
    const { users } = this.state;
    if (
      e.keyCode === 13
      && value.length !== 0
      && users.some((doc) => doc.id === value)
    ) {
      localStorage.setItem('searchValue', value);
      window.open('/search', '_self');
    } else if (
      e.keyCode === 13
      && value.length !== 0
      && !users.some((doc) => doc.id === value)
    ) {
      alert('Данного пользователя невозможно найти.');
    }
  }

  render() {
    const { users } = this.state;
    return (
      <>
        <header>
          <InfoButton className="info-button" />
        </header>

        <main className="first-page-main">
          <div className="h1-and-icon">
            <h1>Mini Twitter</h1>
            <img alt="Twitter icon" className="twitter" src={twitterImg} />
          </div>

          <div className="search-div">
            <Autocomplete
              className="search-text-field"
              freeSolo
              disableClearable
              autoComplete
              options={users.map((user) => user.id)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Поиск"
                  onKeyDown={this.keyPress}
                  InputProps={{ ...params.InputProps, type: 'search' }}
                />
              )}
            />
            <SearchButton />
          </div>
        </main>
      </>
    );
  }
}

export default FirstPage;
