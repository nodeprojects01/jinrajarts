import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import ImageCard from './components/ImageCard';
import WideCard from './components/WideCard';
import RecentEvent from './components/RecentEvent';
import bgHome from './media/images/background5.jpg';
import data from './config/data';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import chaturmuka_basadi from './media/images/chaturmuka_basadi.JPG';
import rainy_season from './media/images/rainy_season.JPG';
import serenity from './media/images/serenity.jpg';
import Paper from '@material-ui/core/Paper';
import { Typography, TextareaAutosize } from '@material-ui/core';
import { jpStyle, jpTheme } from './styles/global';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mainPic: {
    maxWidth: 300,
    padding: '1em',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  const columnView = data.imagesColumnView;
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{
          minHeight: "100vh",
          // background: 'radial-gradient(#A2BCD5, #C0D7E7)'
          background: 'linear-gradient(45deg, #A2BCD5 30%, #DBE6E6 90%)',
          // backgroundImage: `url(${bgHome})`,
          // backgroundSize: 'cover',
          // backgroundPosition: 'center'
        }}
      >
        <Box>
          <Typography variant="h2" style={jpTheme.header}>GALLERY</Typography>
        </Box>
        <Typography style={{
          fontSize: "0.8em",
          fontFamily: jpStyle.fontFamilyMontserrat,
          fontWeight: "700",
          color: "#395D7E"
        }} >by JINRAJ & PRAVEEN</Typography>
        <br />
        <Navbar />
      </Grid>

      <Box style={{ padding: "4em", background: jpStyle.colorGreyLight }}>
        <WideCard />
        <Divider variant="middle" style={{marginTop:"4em"}}/>
        <Box style={{ padding: "2em 0" }}>
          <Typography variant="h2" style={jpTheme.title} align="center">RECENT EVENTS</Typography>
        </Box>
        <Grid container spacing={4}>
          {[1, 2, 3].map((items) => (
            <Grid item xs={12} md={4}>
              <RecentEvent />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box style={{ padding: "4em" }}>
        <Box style={{ padding: "0 0 2em 0" }}>
          <Typography variant="h2" style={jpTheme.title} align="center">COLLECTIONS</Typography>
        </Box>
        <Grid container spacing={4}>
          {columnView.map((items) => (
            <Grid item xs={12} md={12 / columnView.length}>
              {items.map((index) => (
                <ImageCard data={data.images[index]} />
              ))}
            </Grid>
          ))}

        </Grid>
      </Box>

    </div>
  );
}

export default App;
