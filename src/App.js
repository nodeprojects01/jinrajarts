import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import ImageCard from './components/ImageCard';
import WideCard from './components/WideCard';
import bgHome from './media/images/background5.jpg';
import data from './config/data';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import chaturmuka_basadi from './media/images/chaturmuka_basadi.JPG';
import rainy_season from './media/images/rainy_season.JPG';
import serenity from './media/images/serenity.jpg';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { jpStyle, jpTheme } from './styles/global';
import SendEmail from './components/SendEmail'
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
      <Box>
        <header style={{
          backgroundColor: "#FFF",
          minHeight: "100vh",
          backgroundImage: `url(${bgHome})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <Navbar />
        </header>
      </Box>

      <Box style={{ padding: "4em", background:jpStyle.colorGreyLight }}>
        <WideCard />
      </Box>

      <Box style={{ padding: "0em 4em 4em" }}>
        <Box style={{ padding: "2em 0" }}>
          <Typography variant="h2" style={jpTheme.header} align="center">COLLECTIONS</Typography>
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
      <Box style={{ background:jpStyle.colorGreen }}>
        <SendEmail />
      </Box>
    </div>
  );
}

export default App;
