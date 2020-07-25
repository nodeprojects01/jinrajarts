import React,{ useState } from 'react';
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
import Backdrop from '@material-ui/core/Backdrop';
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
  const columnView = data.imagesColumnView;
  const [showImage, setShowImage] = React.useState(''); 
  const handleOnClick=(e,filepath)=>{
    console.log(e.target)
    console.log(filepath)
    // setShowImage()
    setShowImage(filepath)
  }
  return (
    <div>
    {showImage!='' &&
      <Backdrop className={classes.backdrop} open={true} onClick={()=>{setShowImage('')} } >
         <img className={classes.mainPic} style={{ padding: 0 }} src={showImage} />
       </Backdrop>
    }
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
                <ImageCard data={data.images[index]} onClick={(e) => { handleOnClick(e,data.images[index].filepath) }} />
              ))}
            </Grid>
          ))}

        </Grid>
      </Box>
      <Box style={{ background:jpStyle.colorGreen }}>
        <SendEmail />
      </Box>
    </div>
    </div>
  );
}

export default App;
