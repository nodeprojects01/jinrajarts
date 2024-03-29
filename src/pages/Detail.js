import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { Typography, Button } from '@material-ui/core';
import { jpStyle, jpTheme } from '../styles/global';
import { Link } from 'react-router-dom'
import DisplayImage from '../components/DisplayImage';

const styles = {
    mobileView: {
        maxWidth: "80%",
        maxHeight: "80%"
    },
    desktopView: {
        maxHeight: "400px"
    }
}

export default function Detail(props) {
    const back = "< BACK";

    return (
        <div>
            <Box style={{ padding: "4em", background: jpStyle.colorGreyLight }}>
                <Box align="right">
                    <Button component={Link} to="/" style={jpTheme.titleMarginLess} >{back}</Button>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    {/* <img className={classes.mainPic} alt={props.name} style={{ padding: 0,align:"center" }} src={props.location.data.filepath} /> */}
                    <DisplayImage style={{ padding: 0, align: "center" }} height="300px" width="auto" images={props.location.data.filepath} />
                </Box>
                <Typography variant="h2" style={jpTheme.title} align="center">{props.location.data.name}</Typography>
                <Box style={jpTheme.textSmall} align="center">{props.location.data.size}</Box>
                <Typography variant="body2" color="textSecondary" component="p" align="center" style={jpTheme.subTitle}>
                    {props.location.data.description}
                </Typography>
                <br />
                <Box style={jpTheme.textSmall} align="center">artby {props.location.data.artist}</Box>

                <Box style={{ textTransform: "uppercase", letterSpacing: "1px" }} align="center">
                    <p style={jpTheme.textSmall}>
                        {props.location.data.createdDate}
                    </p></Box>

            </Box>
        </div>
    );
}