import { pathSearch } from '../config';
import GetUsersId from '../helpers/GetUsersId';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import PropTypes from 'prop-types';

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function SearchField(props) {
  const [state, setState] = useState([]);

  const { className } = props;

  useEffect(async () => {
    setState(await GetUsersId());
  }, []);

  const history = useHistory();

  const keyPress = (e) => {
    const value = e.target.value.trim();
    if (
      e.keyCode === 13
      && value.length !== 0
      && state.some((doc) => doc.id === value)
    ) {
      history.push(`${pathSearch}?searchValue=${value}`);
    } else if (
      e.keyCode === 13
      && value.length !== 0
    ) {
      alert('Данного пользователя невозможно найти.');
    }
  };

  return (
    <Autocomplete
      className={className}
      disableClearable
      autoComplete
      freeSolo
      options={state.map((user) => user.id)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Поиск"
          onKeyDown={keyPress}
          InputProps={{ ...params.InputProps, type: 'search' }}
        />
      )}
    />
  );
}

SearchField.defaultProps = {
  className: '',
};

SearchField.propTypes = {
  className: PropTypes.string,
};
