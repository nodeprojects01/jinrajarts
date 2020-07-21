import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import ImageCard from './components/ImageCard';
import bgHome from './media/images/background5.jpg';
import images from './config/data';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import chaturmuka_basadi from './media/images/chaturmuka_basadi.JPG';
import rainy_season from './media/images/rainy_season.JPG';
import serenity from './media/images/serenity.jpg';
import Paper from '@material-ui/core/Paper';

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
  const columnView = [[1, 4, 7], [2, 5, 8], [3, 6]]
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

      <Box style={{ padding: "7em 2em" }}>
        <Grid container spacing={4}>
          {columnView.map((items) => (
            <Grid item xs={12} md={12/columnView.length}>
              {items.map((index) => (
                <div>
                  <Paper elevation={1} className={classes.paper}>
                    <img className={classes.mainPic} src={images[index].filepath} />
                  </Paper>
                  <br /><br />
                </div>
              ))}
            </Grid>
          ))}

        </Grid>
      </Box>

    </div>
  );
}

export default App;
