import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from '@material-ui/core/Drawer';
import Footer from './Footer';
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box
} from '@material-ui/core';
import { ContactPhone, Home, ListAlt, Portrait } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import avatar from '../hafiddenguir.png';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: '#511',
    height: '100%'
  },
  avatar: {
    display: 'block',
    margin: '0.5rem auto',
    width: theme.spacing(13),
    height: theme.spacing(13)
  },
  listItem: {
    color: 'tan'
  },
  listText: {
    color: 'tan',
    fontSize: '3.8rem'
  }
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: 'Home',
    listPath: '/'
  },
  {
    listIcon: <Portrait />,
    listText: 'Curriculum Vitae',
    listPath: '/cv'
  },
  {
    listIcon: <ListAlt />,
    listText: 'Portfolio',
    listPath: '/portfolio'
  },
  {
    listIcon: <ContactPhone />,
    listText: 'Contact',
    listPath: '/contact'
  }
];

const Navbar = (props) => {
  const [state, setState] = useState({
    right: false
  });

  const history = useHistory();

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt="Hafid Denguir" />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listText}
              primary={lsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const title = history.location.pathname.split('/')[1]
    ? capitalizeFirstLetter(history.location.pathname.split('/')[1])
    : 'Home';

  return (
    <Box component="nav" position="relative" style={{ zIndex: 1 }}>
      <AppBar position="static" style={{ background: '#222' }}>
        <Toolbar>
          <IconButton onClick={toggleSlider('right', true)}>
            <MenuIcon style={{ color: 'tomato' }} />
          </IconButton>
          <Typography variant="h5" style={{ color: 'tan' }}>
            {title}
          </Typography>
          <MobileRightMenuSlider
            anchor="right"
            open={state.right}
            onClose={toggleSlider('right', false)}
          >
            {sideList('right')}
            <Footer />
          </MobileRightMenuSlider>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
