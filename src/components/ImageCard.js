import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Paper from '@material-ui/core/Paper';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';


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
            <Paper elevation={1} className={classes.paper} style={props.data.backgroundColor}>
                {(props.data.more.hideFrame == true) ?
                    <img className={classes.mainPic} style={props.data.more.frameColor} src={props.data.filepath} />
                    :
                    <img className={classes.mainPic} style={{ padding: 0 }} src={props.data.filepath} />
                }

            </Paper>
            <Card >
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <FavoriteIcon className={classes.button} />
                        </IconButton>
                    }
                    title={props.data.name}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Description of the painting
                    </Typography>
                </CardContent>
            </Card>
            <br />
        </div>
    )
}