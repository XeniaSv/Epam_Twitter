import GetCommentData from '../helpers/GetCommentData';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import React, { useState, useEffect } from 'react';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 700,
    marginTop: '30px',
    marginBottom: '30px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: blue[500],
  },
  text: {
    textAlign: 'left',
  },
  title: {
    float: 'left',
  },

  subheader: {
    marginTop: '20px',
    width: '200px',
    textAlign: 'left',
  },
}));

export default function CommentCard(props) {
  const classes = useStyles();

  const [state, setState] = useState({
    date: 'Loading...',
    image: '',
    text: 'Loading...',
    name: 'Loading',
  });

  const {
    userId,
    tweetId,
    commentId,
  } = props;

  useEffect(async () => {
    setState(await GetCommentData(userId, tweetId, commentId));
  }, []);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar className={classes.avatar} src={state.image} />}
        title={<p className={classes.title}>{state.name}</p>}
        subheader={<p className={classes.subheader}>{state.date}</p>}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.text}
        >
          {state.text}
        </Typography>
      </CardContent>
    </Card>
  );
}

CommentCard.defaultProps = {
  userId: '',
  tweetId: '',
  commentId: '',
};

CommentCard.propTypes = {
  userId: PropTypes.string,
  tweetId: PropTypes.string,
  commentId: PropTypes.string,
};
