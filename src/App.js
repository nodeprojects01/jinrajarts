import React, { useState } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import ImageCard from './components/ImageCard';
import WideCard2 from './components/WideCard2';
import WideCard from './components/WideCard';
import Tags from './components/Tags';
import RecentEvent from './components/RecentEvent';
import data from './config/data';
import functions from './config/functions';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { jpStyle, jpTheme } from './styles/global';
import SendEmail from './components/SendEmail'
import Backdrop from '@material-ui/core/Backdrop';
import Divider from '@material-ui/core/Divider';
import ImageSlider from './components/ImageSlider';
import Praveen from './media/images/praveen.JPG';
import Jinraj from './media/images/jinraj.jpg';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  aboutGrid: {
    padding: "5em !important",
    [theme.breakpoints.down('md')]: {
      padding: "0 !important"
    }
  },
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
  const [columnView, setColumnView] = React.useState(functions.getColumnView(data.images, 3, "createdDate"));
  const events = functions.getEvents(data.images, "createdDate");
  const menuItems = data.menu;
  const categories = functions.getCategories(data.images);
  const [activeCategory, setActiveCategory] = React.useState(categories[0]);
  const [showImage, setShowImage] = React.useState('');

  console.log("column view - ", columnView);
  const handleOnClick = (e, filepath) => {
    setShowImage(filepath);
  }

  const onCategoryClick = (newValue) => {
    setActiveCategory(newValue)
    var filterImages = functions.getCategoryImages(data.images, newValue, "createdDate");
    setColumnView(functions.getColumnView(filterImages, 3, "createdDate"))
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
          <Navbar data={menuItems} />
          
        </Box>
      </Grid>

      <Box id="events" style={{ padding: "4em", background: jpStyle.colorGreyLight }}>
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

      <Box id="paintings" style={{ padding: "2em 4em 4em" }}>
        <Box style={{ padding: "0 0 2em 0" }}>
          <Typography variant="h2" style={jpTheme.title} align="center">PAINTINGS</Typography>
          <Tags data={categories} value={activeCategory} setValue={(newValue) => { onCategoryClick(newValue) }} />
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

      <Box id="aboutus" style={{ padding: "2em 4em 4em", background: jpStyle.colorGreyLight }}>
        <Box style={{ padding: "0 0 2em 0" }}>
          <Typography variant="h2" style={jpTheme.title} align="center">ABOUT US</Typography>
        </Box>
        <WideCard2 width="100%" height="700px" data={data.aboutUs[0]} />
        <WideCard2 width="100%" height="700px" data={data.aboutUs[1]} otherWay />
      </Box>

      <Box id="contact" style={{ padding: "2em 4em 4em", background: jpStyle.colorGreen }}>
        <Box style={{ padding: "0 0 2em 0" }}>
          <Typography variant="h2" style={jpTheme.title} align="center">CONTACT</Typography>
        </Box>

        <Grid container direction="column" alignItems="center" justify="center" >
          <SendEmail />
        </Grid>
      </Box>
      <Box>

      </Box>
    </div >
  );
}

export default App;
