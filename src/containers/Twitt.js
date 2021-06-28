import Comment from '../components/Comment';

import '../pages/TwittPage.css';

import Img from '../resource/twitter.jpg';

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
import React from 'react';

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
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const returnImage = () => {
    if (props.hasImage === 'yes') {
      return (
        <CardMedia className={classes.media} image={Img} title="Paella dish" />
      );
    }
    return null;
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar className={classes.avatar}>R</Avatar>}
        title="Литература @literabook"
        subheader="September 14, 2016"
      />

      {returnImage()}

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>

      <CardActions disableSpacing className="statistics">
        <div className="statistics-container">
          <p className={classes.text}>
            <b>74</b>
            Likes
          </p>
          <FavoriteIcon className={classes.like} />
        </div>
        <div className="statistics-container">
          <p className={classes.text}>
            <b>15</b>
            Retweets
          </p>
          <ReplyIcon className={classes.reply} />
        </div>
        <div className="statistics-container">
          <p className={classes.text}>
            <b>157</b>
            Comments
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
            <Comment />
            <Comment />
            <Comment />
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

RecipeReviewCard.defaultProps = {
  hasImage: '',
};

RecipeReviewCard.propTypes = {
  hasImage: PropTypes.string,
};

export default RecipeReviewCard;
