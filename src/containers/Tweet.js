import Comment from '../components/Comment';

import GetCommentsId from '../helpers/GetCommentsId';
import GetTweetData from '../helpers/GetTweetData';

import '../pages/TwittPage.css';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import { grey } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CommentIcon from '@material-ui/icons/Comment';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ReplyIcon from '@material-ui/icons/Reply';

import clsx from 'clsx';

import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    marginTop: '30px',
    marginBottom: '30px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    color: grey[600],
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: grey[600],
  },

  like: {
    color: grey[600],
    width: '30px',
    height: '30px',
  },

  reply: {
    color: grey[600],
    width: '30px',
    height: '30px',
  },

  text: {
    fontSize: '16px',
    marginLeft: '5px',
    marginRight: '5px',
    color: grey[600],
  },
}));

function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [state, setState] = useState({
     date: 'Loading...',
     image: '',
     likes: 'Loading...',
     retweet: 'Loading...',
     text: 'Loading...',
  });
  const [commentsState, setCommentsState] = useState([]);

  const {
    name,
    userId,
    avatar,
    docId,
  } = props;

  useEffect(async () => {
    setState(await GetTweetData(userId, docId));
    setCommentsState(await GetCommentsId(userId, docId));
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const returnImage = () => {
    if (state.image !== '') {
      return (
        <CardMedia className={classes.media} image={state.image} title="Image" />
      );
    }
    return null;
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar className={classes.avatar} src={avatar} />}
        title={`${name} ${userId}`}
        subheader={state.date}
      />

      {returnImage()}

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {state.text}
        </Typography>
      </CardContent>

      <CardActions disableSpacing className="statistics">
        <div className="statistics-container">
          <p className={classes.text}>
            <b>{state.likes}</b>
            &nbsp;Likes
          </p>
          <FavoriteIcon className={classes.like} />
        </div>
        <div className="statistics-container">
          <p className={classes.text}>
            <b>{state.retweet}</b>
            &nbsp;Retweets
          </p>
          <ReplyIcon className={classes.reply} />
        </div>
        <div className="statistics-container">
          <p className={classes.text}>
            <b>{commentsState.length}</b>
            &nbsp;Comments
          </p>
          <IconButton>
            <CommentIcon
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
            >
              <ExpandMoreIcon />
            </CommentIcon>
          </IconButton>
        </div>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {commentsState.map((id) => (
              <Comment userId={userId} tweetId={docId} commentId={id} />
            ))}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

RecipeReviewCard.defaultProps = {
  name: '',
  userId: '',
  avatar: '',
  docId: '',
};

RecipeReviewCard.propTypes = {
  name: PropTypes.string,
  userId: PropTypes.string,
  avatar: PropTypes.string,
  docId: PropTypes.string,
};

export default RecipeReviewCard;
