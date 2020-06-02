import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
//import Instagram from '@material-ui/icons/Instagram';
import LinkedIn from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
  root: {
    '& .MuiBottomNavigationAction-root': {
      minWidth: 0,
      maxWidth: 250
    },
    '& .MuiSvgIcon-root': {
      fill: 'tan',
      '&:hover': {
        fill: 'tomato',
        fontSize: '1.8rem'
      }
    }
  }
});

const Footer = () => {
  const classes = useStyles();
  const [shareButtons] = useState([
    {
      icon: <LinkedIn />,
      url: 'https://www.linkedin.com/in/hafiddenguir/',
      target: '_blank'
    },
    {
      icon: <Twitter />,
      url: 'https://twitter.com/hafiddenguir',
      target: '_blank'
    },
    {
      icon: <Facebook />,
      url: '',
      target: '_blank'
    }
  ]);

  return (
    <BottomNavigation width="auto" style={{ background: '#233' }}>
      {shareButtons.map(({ icon, url, target }, indx) => (
        <BottomNavigationAction
          key={indx}
          className={classes.root}
          icon={icon}
          href={url ? url : '#'}
          target={target}
        />
      ))}
    </BottomNavigation>
  );
};

export default Footer;
