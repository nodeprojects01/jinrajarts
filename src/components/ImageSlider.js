import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core'
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles({
    photo: {
        // objectFit: 'cover',
        width: '100%',
        height: '100%',
       
    }
});
const CoverGrid = ({ url,content }) => {
    const styles = {
    padding: "4em",
    minHeight: "100vh",
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
  
    return (
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={styles}>
            {content}
        </Grid>
    );
  }

export default function ImageSlider(props) {
    const classes = useStyles(props);
    const value = {
        autoPlay: true,
        timer: 500,
        indicators: false,
        timeout: 200,
        navButtonsAlwaysVisible: false
    }
   
    return (
        
        <div >
            <Carousel
                autoPlay={value.autoPlay}
                timer={value.timer}
                timeout={value.timeout}
                indicators={value.indicators}
                navButtonsAlwaysVisible={value.navButtonsAlwaysVisible}
            >
               {props.images.map((item, index) => {
                        return (
                            <Paper
                                className="Project"
                                elevation={0}
                                style={{
                                    backgroundColor: "#333",                                 
                                }}>
                             {props.cover=='true'?
                            <CoverGrid url={ item } content={props.content}></CoverGrid>
                            :
                            <img classname={classes.photo} height={props.height} width={props.width} src={item} />
                            }
                            </Paper>
                        )
                    })
                }
                
            </Carousel>
        </div>
    )
}
