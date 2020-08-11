import React, { useState } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import ImageCard from './components/ImageCard';
import WideCard2 from './components/WideCard2';
import WideCard from './components/WideCard';
import Tags from './components/Tags';
import RecentEvent from './components/RecentEvent';
import Button from '@material-ui/core/Button';
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
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  aboutGrid: {
    padding: "5em !important",
    [theme.breakpoints.down('md')]: {
      padding: "0 !important"
    }
  },
  appMargin: {
    padding: "2em 4em 4em",
    [theme.breakpoints.down('md')]: {
      padding: "2em",
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
  const [columnView, setColumnView] = React.useState(functions.getColumnView(data.images, 3, "createdDate", data.paintings.showLessCount));
  const [events, setEvents] = React.useState(functions.getEvents(data.images, "createdDate", data.recentEvents.showLessCount));
  const menuItems = data.menu;
  const categories = functions.getCategories(data.images);
  const [activeCategory, setActiveCategory] = React.useState(categories[0]);
  const [showImage, setShowImage] = React.useState('');
  const [viewAllPaintings, setViewAllPaintings] = React.useState(false);
  const [viewAllEvents, setViewAllEvents] = React.useState(false);
  const handleOnClick = (e, filepath) => {
    setShowImage(filepath);
  }
  // console.log("recentEvents.showLessCount-",data.recentEvents.showLessCount)


  const onCategoryClick = (newValue) => {
    setActiveCategory(newValue)
    setViewAllPaintings(false)
    var filterImages = functions.getCategoryImages(data.images, newValue, "createdDate");
    setColumnView(functions.getColumnView(filterImages, 3, "createdDate", data.paintings.showLessCount))
  }
  const ViewAll = () => {
    setViewAllPaintings(true)
    var filterImages = functions.getCategoryImages(data.images, activeCategory, "createdDate");
    setColumnView(functions.getColumnView(filterImages, 3, "createdDate", 0))

  }
  const ViewLess = () => {
    setViewAllPaintings(false)
    var filterImages = functions.getCategoryImages(data.images, activeCategory, "createdDate");
    setColumnView(functions.getColumnView(filterImages, 3, "createdDate", data.paintings.showLessCount))
  }
  return (
    <div>
      {showImage != '' &&
        <Backdrop className={classes.backdrop} open={true} onClick={() => { setShowImage('') }} >
          <img className={classes.mainPic} style={{ padding: 0 }} src={showImage} />
        </Backdrop>
      }
      <Grid container id="top" spacing={0} direction="column" alignItems="center" justify="center"
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
          <Typography style={jpTheme.cursiveTitle} >by Jinraj & Praveen</Typography>
          <br />
          <Navbar data={menuItems} />
        </Box>
      </Grid>

      <Box id="events" className={classes.appMargin} style={{ background: jpStyle.colorGreyLight }}>
        <Box style={{ padding: "3em 0 1em" }}>
          <WideCard data={events[0]} />
        </Box>
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
        <Box display="flex" justifyContent="center" style={{ padding: "2em 0 0" }}>
          {viewAllEvents == false ?
            <Button style={jpTheme.buttonGrey} onClick={() => {
              setViewAllEvents(true)
              setEvents(functions.getEvents(data.images, "createdDate", 0))
            }
            }>view all</Button>
            :
            <Button style={jpTheme.buttonGrey} onClick={() => {
              setViewAllEvents(false)
              setEvents(functions.getEvents(data.images, "createdDate", data.recentEvents.showLessCount))
            }
            }>show less</Button>
          }
        </Box>
      </Box>

      <Box id="paintings" className={classes.appMargin}>
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
        <Box display="flex" justifyContent="center" style={{ padding: "2em 0 0" }}>
          {viewAllPaintings == false ?
            <Button style={jpTheme.buttonGrey} onClick={ViewAll}>view all</Button>
            :
            <Button style={jpTheme.buttonGrey} onClick={ViewLess}>show less</Button>
          }
        </Box>
      </Box>

      <Box id="aboutus" className={classes.appMargin} style={{ background: jpStyle.colorGreyLight }}>
        <Box style={{ padding: "0 0 2em 0" }}>
          <Typography variant="h2" style={jpTheme.title} align="center">ABOUT US</Typography>
        </Box>
        <WideCard2 width="100%" height="700px" data={data.aboutUs[0]} />
        <WideCard2 width="100%" height="700px" data={data.aboutUs[1]} otherWay />
      </Box>

      <Box id="contact" className={classes.appMargin} style={{ background: jpStyle.colorGreen }}>
        <Box style={{ padding: "0 0 2em 0" }}>
          <Typography variant="h2" style={jpTheme.title} align="center">CONTACT</Typography>
        </Box>

        <Grid container direction="column" alignItems="center" justify="center" >
          <SendEmail />
        </Grid>
      </Box>

      <Fab style={jpTheme.buttomRightCorner} href="#top" size="medium" aria-label="scroll back to top">
        {/* <KeyboardArrowUpIcon /> */}
        <Typography variant="h2" style={jpTheme.subTitle}>TOP</Typography>
      </Fab>
    </div >
  );
}

export default App;
