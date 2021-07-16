import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import PropTypes from 'prop-types';

import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginBottom: theme.spacing(2),
      display: 'flex',
      marginLeft: '2.2em',
    },
  },
  namefield: {
    width: '30%',
    flex: 'left',
  },
  commentfield: {
    width: '91%',
  },
}));

export default function FormPropsTextFields(props) {
  const classes = useStyles();

  const onChangeNameField = (e) => {
    props.parentCallbackName(e.target.value);
  };

  const onChangeCommentField = (e) => {
      props.parentCallbackComment(e.target.value);
  };

  const onKeyEnter = (e) => {
      if (e.keyCode === 13) {
        props.parentCallbackEnter();
      }
  };

  return (
    <div className={classes.root}>
      <TextField
        onChange={onChangeNameField}
        className={classes.namefield}
        id="outlined-search"
        label="Name"
        type="search"
        variant="outlined"
      />
      <TextField
        onKeyDown={onKeyEnter}
        onChange={onChangeCommentField}
        className={classes.commentfield}
        id="outlined-search"
        label="Comment"
        type="search"
        variant="outlined"
      />
    </div>
  );
}

FormPropsTextFields.defaultProps = {
    parentCallbackName: PropTypes.func,
    parentCallbackComment: PropTypes.func,
    parentCallbackEnter: PropTypes.func,
};

FormPropsTextFields.propTypes = {
    parentCallbackName: PropTypes.func,
    parentCallbackComment: PropTypes.func,
    parentCallbackEnter: PropTypes.func,
};
