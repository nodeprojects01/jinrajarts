import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { jpStyle, jpTheme } from '../styles/global';
import { useHistory } from "react-router-dom";
import DisplayImage from './DisplayImage';

export default function WideCard(props) {
    const history = useHistory();
    console.log(props)
    return (
        <div>
            <Grid container spacing={8}>
                <Grid item xs={12} md={6}>
                    <DisplayImage images={props.data.filepath} style={{ padding: 0 }} width="100%" height="100%"/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography variant="h2" style={jpTheme.title} >{props.data.name}</Typography>
                        <div style={{ textTransform: "uppercase", letterSpacing: "1px" }}>
                            <p style={jpTheme.textSmall}>
                                {props.data.createdDate}
                            </p>
                        </div>
                        <p style={jpTheme.textDefault}>
                            {(props.data.description).substring(0, 300)}
                        </p>
                    </Box>
                    <Button style={jpTheme.buttonBorderlessGrey} onClick={() => {
                        history.push({
                            pathname: '/Details',
                            data: props.data
                        })
                    }} >read more</Button>
                </Grid>
            </Grid>
        </div>
    );
}
