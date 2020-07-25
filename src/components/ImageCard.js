import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { jpStyle, jpTheme } from '../styles/global';


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
        padding: '4em',
        color: theme.palette.text.secondary,
        display: "flex",
        justifyContent: "center",
        borderRadius: '0px'
    },
}));

export default function ImageCard(props) {
    const classes = useStyles();
    
    return (
        <div>
            <Paper elevation={0} className={classes.paper} style={props.data.backgroundColor} onClick={props.onClick}>
                {(props.data.more.hideFrame == false) ?
                    <img className={classes.mainPic} style={props.data.more.frameColor} src={props.data.filepath[0]} />
                    :
                    <img className={classes.mainPic} style={{ padding: 0 }} src={props.data.filepath} />
                }

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
                <Box style={jpTheme.textSmall}>
                    {(props.data.description).substring(0,100)}
                    ...<b style={{color:"#333", }}>more</b>
                </Box>
            </div>
            <br />
        </div>
    )
}