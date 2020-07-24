import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Image1 from "../media/images/background2.jpg";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { jpStyle, jpTheme } from '../styles/global';


export default function WideCard() {
    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Box style={{
                        backgroundColor: "#FFF",
                        height: "400px",
                        width: "100%",
                        backgroundImage: `url(${Image1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                        <div style={{ "width": "100%", "height": "100%", background: "rgba(225,225,225,0.3)" }} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography variant="h2" style={jpTheme.header} >WALL PAINTING</Typography>
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
