import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
<<<<<<< Updated upstream
import DisplayImage from './components/DisplayImage'
=======
import ImageCard from './components/ImageCard';
import bgHome from './media/images/background5.jpg';
import images from './config/data';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

>>>>>>> Stashed changes
function App() {
  const count=[1,2,0]
  return (
<<<<<<< Updated upstream
    <div className="App">
    {/* <Navbar></Navbar> */}
      {/* <header className="App-header">
      </header> */}
      <body>
        <DisplayImage></DisplayImage>
      </body>
=======
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

      <Box>
        <Grid container spacing={4}>
        {count.map((value)=>(
           <Grid item xs={4}>
           {images.map((image) => (
             (image.id%3==value) &&
               <ImageCard data={image} />          
           ))}
           </Grid>
        ))
           }
        </Grid>
      </Box>

>>>>>>> Stashed changes
    </div>
  );
}

export default App;
