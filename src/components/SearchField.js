import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import firebase from 'firebase';
import 'firebase/firestore';

import PropTypes from 'prop-types';

import React from 'react';

class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    this.className = props.className;
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

  keyPress = (e) => {
    const value = document
      .querySelector(`.${this.className}`)
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
  };

  render() {
    const { users } = this.state;
    return (
      <Autocomplete
        className={this.className}
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
    );
  }
}

SearchField.defaultProps = {
  className: '',
};

SearchField.propTypes = {
  className: PropTypes.string,
};

export default SearchField;
