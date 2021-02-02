import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import { Accordion, Card } from 'react-bootstrap';
import { IoIosArrowForward } from 'react-icons/io';

// Styles
import './main-header.styles.scss';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const ResponsiveMainHeader = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={`${classes.root} responsive-main-header`}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <MenuIcon /> : <MenuIcon />}
          </IconButton>
        </div>

        <List>
          <ListItem button>
            <Link to="/categories/all">Categories</Link>
          </ListItem>
          <ListItem button>
            <Link to="#">TV & Audio</Link>
          </ListItem>
          <ListItem button>
            <Link to="#">Mac Computer</Link>
          </ListItem>
          <ListItem button>
            <Link to="#">Accessores</Link>
          </ListItem>
          <ListItem button>
            <Link to="#">Gadgets</Link>
          </ListItem>
          <ListItem button>
            <Link to="/cart">Shopping Cart</Link>
          </ListItem>
          <ListItem button>
            <Link to="/account/signin">Login</Link>
          </ListItem>
          <ListItem button>
            <Link to="/account/signup">Sign Up</Link>
          </ListItem>
        </List>
        <Accordion>
          <div className="list-item">
            <Accordion.Toggle variant="link" eventKey="0">
              Accessories
              <IoIosArrowForward />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ul>
                  <li>
                    <Link to="#">Cameras</Link>
                  </li>
                  <li>
                    <Link to="#">Software</Link>
                  </li>
                  <li>
                    <Link to="#">Phones & PDAs </Link>
                  </li>
                  <li>
                    <Link to="#"> MP3 Players</Link>
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </div>

          <div className="list-item">
            <Accordion.Toggle variant="link" eventKey="1">
              All in One
              <IoIosArrowForward />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ul>
                  <li>
                    <Link to="#">Cameras</Link>
                  </li>
                  <li>
                    <Link to="#">Software</Link>
                  </li>
                  <li>
                    <Link to="#">Phones & PDAs </Link>
                  </li>
                  <li>
                    <Link to="#"> MP3 Players</Link>
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </div>

          <div className="list-item">
            <Accordion.Toggle variant="link" eventKey="2">
              Gadgets
              <IoIosArrowForward />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <ul>
                  <li>
                    <Link to="#">Cameras</Link>
                  </li>
                  <li>
                    <Link to="#">Software</Link>
                  </li>
                  <li>
                    <Link to="#">Phones & PDAs </Link>
                  </li>
                  <li>
                    <Link to="#"> MP3 Players</Link>
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </div>

          <div className="list-item">
            <Accordion.Toggle variant="link" eventKey="3">
              Gaming
              <IoIosArrowForward />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <ul>
                  <li>
                    <Link to="#">Cameras</Link>
                  </li>
                  <li>
                    <Link to="#">Software</Link>
                  </li>
                  <li>
                    <Link to="#">Phones & PDAs </Link>
                  </li>
                  <li>
                    <Link to="#"> MP3 Players</Link>
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </div>

          <div className="list-item">
            <Accordion.Toggle variant="link" eventKey="4">
              Others
              <IoIosArrowForward />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <ul>
                  <li>
                    <Link to="#">Cameras</Link>
                  </li>
                  <li>
                    <Link to="#">Software</Link>
                  </li>
                  <li>
                    <Link to="#">Phones & PDAs </Link>
                  </li>
                  <li>
                    <Link to="#"> MP3 Players</Link>
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </div>
        </Accordion>
      </Drawer>
    </div>
  );
};

export default ResponsiveMainHeader;
