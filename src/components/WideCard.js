import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { jpStyle, jpTheme } from '../styles/global';
import ImageSlider from './ImageSlider'
import data from '../config/data'

export default function WideCard(props) {
   
    return (
        <div>
            <Grid container spacing={8}>
                <Grid item xs={12} md={6}>
                    {/* <Box style={{
                        backgroundColor: "#FFF",
                        height: "300px",
                        width: "100%",
                        // backgroundImage: `url(${props.data.filepath})`,
                        // backgroundSize: 'cover',
                        // backgroundPosition: 'center'
                    }}> */}
                        {/* <div style={{
                            width: "100%", height: "100%",
                            background: "rgba(225,225,225,0.2)"
                        }} > */}
                        <ImageSlider images={data.wallpaper} height="300px" width="100%"/>
                        {/* </div> */}
                    {/* </Box> */}
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography variant="h2" style={jpTheme.title} >{props.data.name}</Typography>
                        <p style={jpTheme.textDefault}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat.consectetur adipiscing elit,
                            sed do eiusmod consectetur adipiscing elit,
                            sed do eiusmod temporconsectetur adipiscing elit, sed do eiusmod temportempor.
                        </p>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}
