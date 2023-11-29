import React, { useState } from 'react';
import {
  AppBar,
  Avatar,
  Drawer,
  InputAdornment,
  TextField,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@emotion/react';
import DrawerList from './drawerList';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '76px',
    background: 'linear-gradient(to right, #272847 5%, #36097F)',
    padding: '16px',
  },
  logo: {
    width: '44px',
    height: '44px',
  },
  icon: {
    width: '40px',
    height: '40px',
    gap: '24px',
    cursor: 'pointer',
  },
  appBar: {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1100,
  },
  drawerContainer: {
    color: '#fff',
    position: 'absolute',
    top: '76px',
    zIndex: 1,
    width: '100%',
    zIndex: 99,
  },
  drawerPaper: {
    background: 'linear-gradient(to right, #272847 5%, #36097F)',
    height: '100%',
    width: '100vw',
    marginTop: '100px',
    color: '#fff',
  },
  mobileNav: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '76px',
    background: 'linear-gradient(to right, #272847 5%, #36097F)',
    padding: '16px',
    position: 'relative',
    zIndex: 999999999,
  },
  desktopNav: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '76px',
    padding: '16px',
    position: 'relative',
    zIndex: 999999999,
  },
  tabletDrawerPaper: {
    background: 'linear-gradient(to right, #272847 0%, #36097F)',
    height: '100%',
    width: '100%',
    color: '#fff',
  },
  desktopDrawerPaper: {
    background: '#F6F6FA',
    height: '100%',
    width: '100%',
  },
  desktopLogo: {
    width: '144.27px',
    height: '36.27px',
    cursor: 'pointer',
  },
  desktopAvatar: {
    height: '32px',
    width: '32px',
    marginRight: '15px',
    cursor: 'pointer',
  },
  desktopIcon: {
    marginRight: '25px',
    height: '42px',
    width: '42px',
    cursor: 'pointer',
  },
  searchbar: {
    background: '#FFFFFF',
    borderRadius: '100px',
    border: '1px solid #E6E8EC',
    width: '200px',
    height: '50px',
  },
});

const Nav = ({ toggleDrawer, open }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [showSearchbar, setShowSearchbar] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  if (isMobile) {
    return (
      <div>
        <header className={classes.mobileNav}>
          <AppBar
            style={{
              background: '#36097F',
            }}
            elevation={0}
            className={classes.appBar}>
            <div className={classes.container}>
              <img
                onClick={toggleDrawer(!open)}
                className={classes.icon}
                src={open ? 'images/close-icon-x.svg' : 'images/menu.svg'}
                alt='Menu'
              />
              <img
                className={classes.logo}
                src={'images/streamline-emojis_rainbow.svg'}
                alt='Logo'
              />
              <img
                className={classes.icon}
                src={'images/search.svg'}
                alt='Search'
              />
            </div>
          </AppBar>

          <Drawer
            anchor={'left'}
            open={open}
            onClose={toggleDrawer(false)}
            className={classes.drawerContainer}>
            <div className={classes.drawerPaper}>
              <DrawerList />
            </div>
          </Drawer>
        </header>
      </div>
    );
  }

  if (isTablet) {
    const tabletDrawerWidth = 100;
    return (
      <div>
        <header>
          <Drawer
            sx={{
              width: tabletDrawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: tabletDrawerWidth,
                boxSizing: 'border-box',
              },
            }}
            variant='permanent'
            anchor='left'
            open={open}
            onClose={toggleDrawer(false)}
            className={classes.drawerContainer}>
            <div className={classes.tabletDrawerPaper}>
              <DrawerList />
            </div>
          </Drawer>
        </header>
      </div>
    );
  }

  const desktopDrawerWidth = 240;

  return (
    <div>
      <header className={classes.desktopNav}>
        <AppBar elevation={0} className={classes.appBar}>
          <div
            className={classes.container}
            style={{ display: 'flex', justifyContent: 'space-between' }}>
            <img
              className={classes.desktopLogo}
              src='images/logo_desktop.svg'
              alt='Menu'
            />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {showSearchbar ? (
                <TextField
                  sx={{
                    '& fieldset': { border: 'none' },
                  }}
                  placeholder='Search'
                  className={classes.searchbar}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <img
                          style={{ cursor: 'pointer' }}
                          onClick={() =>
                            setShowSearchbar((prevState) => !prevState)
                          }
                          src={'images/search.svg'}
                          alt='search'
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              ) : (
                <img
                  onClick={() => setShowSearchbar((prevState) => !prevState)}
                  className={classes.desktopIcon}
                  src={'images/search.svg'}
                  alt='search'
                />
              )}

              <Avatar
                style={{ marginLeft: showSearchbar ? '25px' : 0 }}
                classes={{ root: classes.desktopAvatar }}
              />
            </div>
          </div>
        </AppBar>
        <Drawer
          sx={{
            width: desktopDrawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: desktopDrawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant='permanent'
          anchor='left'
          open={open}
          onClose={toggleDrawer(false)}
          className={classes.drawerContainer}>
          <div
            style={{ marginTop: '110px' }}
            className={classes.desktopDrawerPaper}>
            <DrawerList />
          </div>
        </Drawer>
      </header>
    </div>
  );
};

export default Nav;
