import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar';
import data from '../config/data';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { jpStyle, jpTheme } from '../styles/global';
import Divider from '@material-ui/core/Divider';
import ImageSlider from '../components/ImageSlider';
import { NavLink as RouterLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    coverText: {
        position: 'absolute',
        top: "35%",
        zIndex: 100,
        left: "4%",
        [theme.breakpoints.down('md')]: {
            top: "50%",
        }
    },
    mainPic: {
        maxWidth: '100%',
        maxHeight: '80vh',
        padding: '1em',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block'
    },

}));
export default function Detail(props) {
    // console.log(props)
    const classes = useStyles();
  
    const menuItems = data.menu;
    return (
        <div>
            <Grid container id="top"
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{
                    minHeight: "100vh",
                    background: 'linear-gradient(45deg, #333 30%, #333 90%)'
                }}>
                <ImageSlider images={data.wallpaper} autoPlay={true} height="100vh" width="100%" />

                <Box className={classes.coverText}>
                    <Typography variant="h2" style={jpTheme.header}>GALLERY</Typography>
                    <Typography style={{
                        paddingLeft: "8px",
                        fontSize: "2em",
                        fontFamily: jpStyle.fontFamilyDancingScript,
                        fontWeight: "100",
                        color: "#FFF"
                    }} >by Jinraj & Praveen</Typography>
                    <br />
                    {/* <Navbar data={menuItems} /> */}

                </Box>
            </Grid>
            <Box  style={{ padding: "2em", background: jpStyle.colorGreyLight }}>
                <Typography variant="h2" style={jpTheme.title} align="center">{props.location.data.name}</Typography>
               
                <img className={classes.mainPic} style={{ padding: 0,align:"center" }} src={props.location.data.filepath} />
               
                <Typography variant="body2" color="textSecondary" component="p" align="center" style={{ fontSize: "0.89em" }}>
                    {props.location.data.description}
                 </Typography>
            </Box>
        </div>
    );
}