import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { jpStyle, jpTheme } from '../styles/global';
import ImageSlider from './ImageSlider'
import data from '../config/data'

export default function WideCard(props) {
    return (
        <div>
            <Grid container spacing={8}>
                <Grid item xs={12} md={6}>
                    <ImageSlider images={data.wallpaper} autoPlay={false} height="300px" width="100%" />
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
                    <Button style={jpTheme.buttonBorderlessGrey}>view more</Button>
                </Grid>
            </Grid>
        </div>
    );
}
