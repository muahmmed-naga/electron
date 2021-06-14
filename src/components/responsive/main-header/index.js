import React from "react";

// Components
import clsx from "clsx";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import { IoBagOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import Toolbar from "@material-ui/core/Toolbar";
import ListItem from "@material-ui/core/ListItem";
import { Accordion, Card } from "react-bootstrap";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { ReactComponent as Logo } from "../../../assets/svg/logo.svg";

// Styles
import "./index.scss";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    height: "30px !important",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  listLink: {
    fontSize: ".8rem",
    color: "#6b6969",
    marginBottom: "8px",
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
        <Toolbar
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="flex-align-center">
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
              <Logo />
            </Typography>
          </div>

          <div className="shopping-cart">
            <IoBagOutline />
            <div className="count">0</div>
          </div>
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
            {theme.direction === "ltr" ? <MenuIcon /> : <MenuIcon />}
          </IconButton>
        </div>

        <Accordion>
          <div className="list-item">
            <Accordion.Toggle variant="link" eventKey="0">
              Accessories
              <IoIosArrowDown />
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
              <IoIosArrowDown />
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
              <IoIosArrowDown />
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
              <IoIosArrowDown />
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
              <IoIosArrowDown />
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
          <List>
            <ListItem button>
              <Link className={classes.listLink} to="/categories/all">
                Categories
              </Link>
            </ListItem>
            <ListItem button>
              <Link className={classes.listLink} to="#">
                TV & Audio
              </Link>
            </ListItem>
            <ListItem button>
              <Link className={classes.listLink} to="#">
                Mac Computer
              </Link>
            </ListItem>
            <ListItem button>
              <Link className={classes.listLink} to="/cart">
                Shopping Cart
              </Link>
            </ListItem>
            <ListItem button>
              <Link className={classes.listLink} to="/account/signin">
                Login
              </Link>
            </ListItem>
            <ListItem button>
              <Link className={classes.listLink} to="/account/signup">
                Sign Up
              </Link>
            </ListItem>
          </List>
        </Accordion>
      </Drawer>
    </div>
  );
};

export default ResponsiveMainHeader;
