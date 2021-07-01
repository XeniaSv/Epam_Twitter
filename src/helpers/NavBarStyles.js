import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    right: theme.spacing(0),
    left: theme.spacing(0),
    backgroundColor: '#42a5f5',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#fff',
  },
  title: {
    flexGrow: 1,
    color: '#fff',
    display: 'none',
    marginLeft: theme.spacing(23),
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    color: '#fff',
    position: 'relative',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    color: '#fff',
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '25ch',
    },
  },
}));

export default useStyles;
