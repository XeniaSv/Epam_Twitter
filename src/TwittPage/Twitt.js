import PropTypes from 'prop-types'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CommentIcon from '@material-ui/icons/Comment';
import Img from '../resource/twitter.jpg';
import ReplyIcon from '@material-ui/icons/Reply';
import './TwittPage.css'
import Comment from './Comment'

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
    height: '30px'
  },

  reply: {
    color: grey[600],
    width: '30px',
    height: '30px'
  },

  text: {
      fontSize: '16px',
      marginLeft: '5px',
      marginRight: '5px',
      color: grey[600]
  }
}));


function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const returnImage = () => {
      if(props.hasImage === "yes"){
          return (
          <CardMedia
          className={classes.media}
          image={Img}
          title="Paella dish"/>
          )
      }
      else if (props.hasImage === "no") {
          return;
      }
    }


  return (
    <Card className={classes.root}>
        <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title="Литература @literabook"
        subheader="September 14, 2016"/>

        
        {returnImage()}

        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
        </CardContent>

        <CardActions disableSpacing className="statistics">
            <div className="statistics-container">
                <p className={classes.text}><b>74</b> Likes</p>
                <FavoriteIcon className={classes.like} />
            </div>
            <div className="statistics-container">
                <p className={classes.text}><b>15</b> Retweets</p>
                <ReplyIcon className={classes.reply} aria-label="share"/>
            </div>
            <div className="statistics-container">
                
                <p className={classes.text}><b>157</b> Comments</p>
                <IconButton>
                    <CommentIcon
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more">
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

  
RecipeReviewCard.propTypes = {
    hasImage: PropTypes.string
};

export default RecipeReviewCard;