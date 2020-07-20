import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    mainPic: {
        maxWidth: 300,
        padding: '1em',
    },
    content: {
        padding: '4em',
        borderRadius: '0px'
    }
}));

export default function ImageCard(props) {
    const classes = useStyles();
    console.log(props.data.more.hideFrame)
    return (
        <div>
            <Card elevation={0} className={classes.content} style={props.data.backgroundColor} >
                {(props.data.more.hideFrame == true) ?
                    <img className={classes.mainPic} style={props.data.more.frameColor} src={props.data.filepath} />
                    :
                    <img className={classes.mainPic} style={{ padding: 0 }} src={props.data.filepath} />
                 } 
            </Card>
            <br/>
        </div>
    )
}