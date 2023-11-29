import './App.css';
import Nav from './components/nav';
import {
  Divider,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from '@mui/material';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import FormComponent from './components/formComponent';

const useStyles = makeStyles({
  logo: {
    width: '44px',
    height: '44px',
  },
  icon: {
    width: '40px',
    height: '40px',
    gap: '24px',
  },
  bodyContainer: {
    padding: '24px',
  },
  tabletBodyContainer: {
    padding: '24px',
    marginLeft: '124px',
  },
  desktopBodyContainer: {
    padding: '24px',
    marginLeft: '254px',
  },
  mainTitle: {
    color: '#360C7C',
    fontSize: '28px',
    lineHeight: '37.32px',
    textAlign: 'left',
    fontFamily: 'Playfair Display, serif',
  },
  mainParagraph: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'left',
  },
  sectionHeader: {
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '26.66px',
    textAlign: 'left',
    marginTop: '64px',
    fontFamily: 'Playfair Display, serif',
  },
  formContainer: {
    backgroundColor: 'rgba(246, 246, 250, 0.2)',
    padding: '0.001rem 1.5rem 2rem 1.5rem',
    boxShadow: '0px 1px 1px 0px #80808061, 0px 2px 2px 0px #80808054, 0px 5px 3px 0px #80808030,  0px 8px 3px 0px #8080800F, 0px 13px 4px 0px #80808003',
  },
});

function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (openState) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(openState);
  };

  let theme = createTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Nav toggleDrawer={toggleDrawer} open={open} />
        <div className={isMobile ? classes.bodyContainer : isTablet ? classes.tabletBodyContainer : classes.desktopBodyContainer}>
          <h1 className={classes.mainTitle}>Page Title</h1>
          <p className={classes.mainParagraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae
            mattis tellus.
          </p>
          <div className={classes.formContainer}>
            <div>
              <h3 className={classes.sectionHeader}>Section Header</h3>
              <Divider />
            </div>
            <FormComponent
              isMobile={isMobile}
              isTablet={isTablet}
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;