import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

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
        indicators: true,
        timeout: 500,
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
                {
                    props.images.map((item, index) => {
                        return (

                            <Paper
                                className="Project"
                                style={{
                                    backgroundColor: item.color,
                                    height: props.height,
                                    width: props.width
                                }}
                                elevation={10}
                            >
                                <img classname={classes.photo} height={props.height} width={props.width} src={item} />
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}
