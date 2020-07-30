import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';
import data from '../config/data';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { jpStyle, jpTheme } from '../styles/global';
import Divider from '@material-ui/core/Divider';
import ImageSlider from './ImageSlider';

export default function Detail(props) {
    const menuItems = data.menu;
    return (
        <div>
            <Typography style={{
                paddingLeft: "8px",
                fontSize: "2em",
                fontFamily: jpStyle.fontFamilyDancingScript,
                fontWeight: "100",
                color: "#FFF"
            }} >by Jinraj & Praveen</Typography>
            <Navbar data={menuItems} />
        </div>
    );
}