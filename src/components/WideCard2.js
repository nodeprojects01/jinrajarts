import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { jpStyle, jpTheme } from '../styles/global';

export default function WideCard2(props) {
    var data = "";
    if (!props.otherWay) {
        data = <div>
            <Grid container spacing={8}>
                <Grid item xs={12} md={6} direction="column" alignItems="center" justify="center">
                    <img style={{
                        height: props.height,
                        width: props.width,
                        backgroundImage: `url(${props.data.filepath})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center"
                    }} />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography variant="h2" style={jpTheme.title} >{props.data.name}</Typography>
                        <p style={jpTheme.textDefault}>
                            {props.data.description}
                        </p>
                    </Box>
                </Grid>
            </Grid>
        </div>
    } else {
        data = <div>
            <Grid container spacing={8}>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography variant="h2" style={jpTheme.title} >{props.data.name}</Typography>
                        <p style={jpTheme.textDefault}>
                            {props.data.description}
                        </p>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} direction="column" alignItems="center" justify="center">
                    <img style={{
                        height: props.height,
                        width: props.width,
                        backgroundImage: `url(${props.data.filepath})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center"
                    }} />
                </Grid>
            </Grid>
        </div >
    }

    return (data);
}
