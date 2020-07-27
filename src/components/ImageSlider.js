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
                            {props.cover == 'true' ?
                                <Grid
                                    container
                                    spacing={0}
                                    direction="column"
                                    alignItems="center"
                                    justify="center"
                                    style={{
                                        padding: "4em",
                                        minHeight: "100vh",
                                        backgroundImage: `url(${item})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }} />
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
