import { Avatar, Divider, List, ListItem, ListItemButton } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  navIcon: {
    height: '24px',
    width: '24px',
    paddingRight: '15px',
  },
  divider: {
    background: '#fff',
    opacity: '20%',
    width: '90%',
    margin: '10px auto',
  },
  accountProfileTexts: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '8px',
  },
  personName: {
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '22px',
  },
  personSubtitle: {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '22px',
  },
  logo: {
    height: '31px',
    width: '31px',
  },
  tabletList: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '93%',
  },
  desktopNavItem: {
    color: '#000',
  },
});

const DrawerList = ({ isMobile, isTablet }) => {
  const classes = useStyles();
  // mobile
  if (isMobile) {
    return (
      <List>
        <ListItemButton>
          <ListItem>
            <img
              className={classes.navIcon}
              src={'images/tdesign_home.svg'}
              alt='home'
            />
            Home
          </ListItem>
        </ListItemButton>
        <ListItemButton>
          <ListItem>
            <img
              className={classes.navIcon}
              src={'images/icon-park-outline_browser.svg'}
              alt='home outline'
            />
            Navigation Item 1
          </ListItem>
        </ListItemButton>
        <ListItemButton>
          <ListItem>
            <img
              className={classes.navIcon}
              src={'images/icon-park-outline_brightness.svg'}
              alt='nav item 2'
            />
            Nav Item 2
          </ListItem>
        </ListItemButton>
        <div className={classes.divider}>
          <Divider classes={{ root: classes.divider }} />
        </div>
        <ListItemButton>
          <ListItem>
            <Avatar src='/broken-image.jpg' />
            <div className={classes.accountProfileTexts}>
              <span className={classes.personName}>Person Name</span>
              <span>Subtitle</span>
            </div>
          </ListItem>
        </ListItemButton>
      </List>
    );
  }

  // tablet
  if (isTablet) {
    return (
      <List classes={{ root: classes.tabletList }}>
        <div className={classes.top}>
          <ListItemButton>
            <ListItem>
              <img
                className={classes.logo}
                src={'images/streamline-emojis_rainbow.svg'}
                alt='Logo'
              />
            </ListItem>
          </ListItemButton>
          <ListItemButton>
            <ListItem>
              <img
                className={classes.navIcon}
                src={'images/tdesign_home.svg'}
                alt='home'
              />
            </ListItem>
          </ListItemButton>
          <ListItemButton>
            <ListItem>
              <img
                className={classes.navIcon}
                src={'images/icon-park-outline_browser.svg'}
                alt='park'
              />
            </ListItem>
          </ListItemButton>
          <ListItemButton>
            <ListItem>
              <img
                className={classes.navIcon}
                src={'images/icon-park-outline_brightness.svg'}
                alt='outline'
              />
            </ListItem>
          </ListItemButton>
        </div>
        <div className={classes.bottom}>
          <Avatar src='/broken-image.jpg' />
        </div>
      </List>
    );
  }

  // desktop
  return (
    <List>
      <ListItemButton>
        <ListItem classes={{ root: classes.desktopNavItem }}>
          <img
            className={classes.navIcon}
            src={'images/tdesign_home_black.svg'}
            alt='home'
          />
          Home
        </ListItem>
      </ListItemButton>
      <ListItemButton>
        <ListItem classes={{ root: classes.desktopNavItem }}>
          <img
            className={classes.navIcon}
            src={'images/icon-park-outline_browser_black.svg'}
            alt='nav item 1'
          />
          Navigation Item 1
        </ListItem>
      </ListItemButton>
      <ListItemButton>
        <ListItem classes={{ root: classes.desktopNavItem }}>
          <img
            className={classes.navIcon}
            alt='nav item 2'
            src={'images/icon-park-outline_brightness_black.svg'}
          />
          Nav Item 2
        </ListItem>
      </ListItemButton>
    </List>
  );
};

export default DrawerList;
