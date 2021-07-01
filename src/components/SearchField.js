import { pathSearch } from '../config';
import GetUsersData from '../helpers/GetUsersData';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

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
    const array = GetUsersData();
    this.setState({ users: array });
  }

  keyPress = (e) => {
    const value = e.target.value.trim();
    const { users } = this.state;
    if (
      e.keyCode === 13
      && value.length !== 0
      && users.some((doc) => doc.id === value)
    ) {
      window.open(`${process.env.PUBLIC_URL}${pathSearch}?searchValue=${value}`, '_self');
    } else if (
      e.keyCode === 13
      && value.length !== 0
    ) {
      alert('Данного пользователя невозможно найти.');
    }
  };

  render() {
    const { users } = this.state;
    return (
      <Autocomplete
        className={this.className}
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
