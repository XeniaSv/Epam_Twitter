import blue from '@material-ui/core/colors/blue';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

import PropTypes from 'prop-types';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginBottom: theme.spacing(1),
      marginLeft: theme.spacing(3),
      display: 'flex',
      flex: 'left',
    },
  },
  input: {
    display: 'none',
  },

  color: {
      color: blue[400],
  },

  container: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export default function UploadButtons(props) {
  const classes = useStyles();
  const [state, setState] = useState();

  function onChangeValue(e) {
    setState(e.target.value);
    props.parentCallbackPhoto(e.target.files[0]);
  }

  return (
    <div className={classes.root}>
      <input onChange={onChangeValue} accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <div className={classes.container}>
        <label htmlFor="icon-button-file">
          <IconButton className={classes.color} component="span">
            <PhotoCamera />
          </IconButton>
        </label>
        <p>{state}</p>
      </div>
    </div>
  );
}

UploadButtons.defaultProps = {
    parentCallbackPhoto: PropTypes.func,
};

UploadButtons.propTypes = {
    parentCallbackPhoto: PropTypes.func,
};
