import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar';
import data from '../config/data';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Typography, Button } from '@material-ui/core';
import { jpStyle, jpTheme } from '../styles/global';
import Divider from '@material-ui/core/Divider';
import ImageSlider from '../components/ImageSlider';
import { NavLink as RouterLink } from "react-router-dom";
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


    return (
        <div>
            <Box style={{ padding: "4em", background: jpStyle.colorGreyLight }}>
                <Box align="right">
                    <Button component={Link} to="/" style={jpTheme.titleMarginLess} >x</Button>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    {/* <img className={classes.mainPic} style={{ padding: 0,align:"center" }} src={props.location.data.filepath} /> */}
                    <DisplayImage style={{ padding: 0, align: "center" }} height="300px" width="auto" images={props.location.data.filepath} />
                </Box>
                <Typography variant="h2" style={jpTheme.title} align="center">{props.location.data.name}</Typography>
                <Box style={jpTheme.textSmall}>{props.location.data.size}</Box>
                <Typography variant="body2" color="textSecondary" component="p" align="center" style={{ fontSize: "0.89em" }}>
                    {props.location.data.description}
                </Typography>
                <br/>
                <Box style={jpTheme.textSmall} align="center">art by {props.location.data.artist}</Box>
                <Box style={jpTheme.textSmall} align="center">{props.location.data.createdDate}</Box>

            </Box>
        </div>
    );
}