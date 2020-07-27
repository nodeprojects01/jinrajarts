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
        autoPlay: props.autoPlay,
        indicators: false,
        timer: 500,
        strictIndexing: true,
        timeout: 300,
        // interval: 100,
        navButtonsAlwaysVisible: false
    }

    return (
        <div>
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
                                backgroundColor: "#333"
                            }}>
                            <img classname={classes.photo}
                                style={{
                                    display: "block",
                                    height: props.height,
                                    width: props.width,
                                    objectFit: "cover"
                                }}
                                height={props.height} width={props.width} src={item} />
                        </Paper>
                    )
                })
                }

            </Carousel>
        </div>
    )
}
