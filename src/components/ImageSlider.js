import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core'
import makeStyles from "@material-ui/core/styles/makeStyles";

const showImage = (props, item) => {
    return (
        <img src={item} style={{
            display: "block",
            height: props.height,
            width: props.width,
            objectFit: "cover"
        }} />
    )
}

export default function ImageSlider(props) {
    const value = {
        autoPlay: props.autoPlay,
        indicators: false,
        timer: 500,
        strictIndexing: true,
        timeout: 300,
        interval: 100,
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
                        <Paper elevation={0} style={{}} >
                            <img src={item} style={{
                                display: "block",
                                height: props.height,
                                width: props.width,
                                objectFit: "cover"
                            }} />
                        </Paper>
                    )
                })}
            </Carousel>
        </div>
    )
}
