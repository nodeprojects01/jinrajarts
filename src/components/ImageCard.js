import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { jpStyle, jpTheme } from '../styles/global';
import DisplayImage from './DisplayImage';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles(theme => ({
    button: {
        "&:hover": {
            color: "red"
        },
    },
    mainPic: {
        maxWidth: '100%',
        maxHeight: '100%',
        padding: '1em',
    },
    content: {
        padding: '4em',
        borderRadius: '0px'
    },
    paper: {
        // padding: theme.spacing(2),
        // textAlign: 'center',
        // verticalAlign: 'middle',
        padding: '2em',
        color: theme.palette.text.secondary,
        display: "flex",
        justifyContent: "center",
        borderRadius: '0px'
    },
}));

export default function ImageCard(props) {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div>
            <Paper elevation={0} className={classes.paper} style={props.data.backgroundColor} onClick={props.onClick}>
                {/* {(props.data.more.hideFrame == false) ?
                    <img className={classes.mainPic} alt={props.name} style={props.data.more.frameColor} src={props.data.filepath[0]} />
                    :
                    <img className={classes.mainPic} alt={props.name} style={{ padding: 0 }} src={props.data.filepath} />
                } */}
                <DisplayImage images={props.data.filepath} style={{ padding: 0 }} width="100%" height="100%" />

            </Paper>
            <div style={{ padding: "8px 12px 12px 12px" }}>
                <Box display="flex" p={0} >
                    <Box p={0} flexGrow={1} style={jpTheme.subTitle}>
                        {props.data.name}
                    </Box>
                    <Box p={0} >
                        {/* <IconButton aria-label="settings"> */}
                        <FavoriteIcon style={{ color: jpStyle.colorGrey, padding: "5px", fontSize: "1.1em" }} className={classes.button} />
                        {/* </IconButton> */}
                    </Box>
                </Box>
                {props.data.description != "" &&
                    <Box style={jpTheme.textSmall}>
                        {(props.data.description).substring(0, 100)}
                    ...<b style={{ color: "#333", cursor:"pointer" }}
                            onClick={() => {
                                history.push({
                                    pathname: '/Details',
                                    data: props.data
                                })
                            }}>more</b>
                    </Box>
                }
            </div>
            <br />
        </div>
    )
}