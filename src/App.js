import React, { useState } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import ImageCard from './components/ImageCard';
import WideCard from './components/WideCard';
import RecentEvent from './components/RecentEvent';
import data from './config/data';
import functions from './config/functions';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Typography, TextareaAutosize } from '@material-ui/core';
import { jpStyle, jpTheme } from './styles/global';
import SendEmail from './components/SendEmail'
import Backdrop from '@material-ui/core/Backdrop';
import Divider from '@material-ui/core/Divider';
import ImageSlider from './components/ImageSlider'

const useStyles = makeStyles((theme) => ({
  coverText: {
    position: 'absolute',
    top: "35%",
    zIndex: 100,
    left: "4%",
    [theme.breakpoints.down('md')]: {
      top: "50%",
    }
  },
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
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  mainPic: {
    maxWidth: '80%',
    maxHeight: '80%',
    padding: '1em',
  },
}));

function App() {
  const classes = useStyles();
  const columnView = functions.getColumnView(data.images, 3, "createdDate");
  const events = functions.getEvents(data.images, "createdDate");
  const [showImage, setShowImage] = React.useState('');

  const handleOnClick = (e, filepath) => {
    setShowImage(filepath)
  }

  return (
    <div>
      {showImage != '' &&
        <Backdrop className={classes.backdrop} open={true} onClick={() => { setShowImage('') }} >
          <img className={classes.mainPic} style={{ padding: 0 }} src={showImage} />
        </Backdrop>
      }
      <Grid container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{
          minHeight: "100vh",
          background: 'linear-gradient(45deg, #333 30%, #333 90%)'
          // backgroundImage: `url(${item})`,
          // backgroundSize: 'cover',
          // backgroundPosition: 'center'
        }}>
        <ImageSlider images={data.wallpaper} autoPlay={true} height="100vh" width="100%" />

        <Box className={classes.coverText}>
          <Typography variant="h2" style={jpTheme.header}>GALLERY</Typography>
          <Typography style={{
            paddingLeft: "8px",
            fontSize: "2em",
            fontFamily: jpStyle.fontFamilyDancingScript,
            fontWeight: "100",
            color: "#FFF"
          }} >by Jinraj & Praveen</Typography>
          <br />
          <Navbar />
        </Box>
      </Grid>

      <Box style={{ padding: "4em", background: jpStyle.colorGreyLight }}>
        <WideCard data={events[0]} />
        <Divider variant="middle" style={{ marginTop: "4em" }} />
        <Box style={{ padding: "2em 0" }}>
          <Typography variant="h2" style={jpTheme.title} align="center">RECENT EVENTS</Typography>
        </Box>
        <Grid container spacing={4}>
          {(events.slice(1)).map((item, index) => (
            <Grid item xs={12} md={4}>
              <RecentEvent data={item} />
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
              {items.map((image) => (
                <ImageCard data={image} onClick={(e) => { handleOnClick(e, image.filepath) }} />
              ))}
            </Grid>
          ))}

        </Grid>
      </Box>

      <Box style={{ padding: "4em", background: jpStyle.colorGreen }}>
        <Box style={{ padding: "0 0 2em 0" }}>
          <Typography variant="h2" style={jpTheme.title} align="center">CONTACT US</Typography>
        </Box>

        <Grid container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center" >
          <SendEmail />
        </Grid>
      </Box>
      <Box>

      </Box>
    </div>
  );
}

export default App;
