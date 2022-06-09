import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { jpStyle, jpTheme } from '../styles/global';
import DisplayImage from './DisplayImage';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "100%"
    },
    media: {
        height: 200,
        paddingTop: '56.25%', // 16:9
    }
}));

export default function WideCard2(props) {

    const classes = useStyles();
    var data = "";
    if (!props.otherWay) {
        data = <div>
            <Grid container spacing={8}>
                {/* <Grid item xs={12} md={6} direction="column" alignItems="center" justify="center">
                    <img style={{
                        height: props.height,
                        width: props.width,
                        backgroundImage: `url(${props.data.filepath})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center"
                    }} />
                </Grid> */}
                <Grid item xs={12} md={6}>
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={props.data.filepath}
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography variant="h2" style={jpTheme.title} >{props.data.name}</Typography>
                        <p style={jpTheme.subTitle}>
                            {props.data.description.split("<br/>").map((sent) => (
                                <p>{sent}</p>
                            ))}
                        </p>
                        <Typography style={jpTheme.textSmall} >Follow on - </Typography>
                        <Link href={props.data.websites.youtube} target="_blank">
                            <YouTubeIcon style={{ padding: "10px 10px 10px 0", fontSize: "2em", color: jpStyle.colorGrey }} />
                        </Link>
                        <Link href={props.data.websites.instagram} target="_blank">
                            <InstagramIcon style={{ padding: "10px", fontSize: "1.8em", color: jpStyle.colorGrey }} />
                        </Link>
                        <Link href={props.data.websites.facebook} target="_blank">
                            <FacebookIcon style={{ padding: "10px", fontSize: "1.8em", color: jpStyle.colorGrey }} />
                        </Link>
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
                        <p style={jpTheme.subTitle}>
                            {props.data.description}
                        </p>
                        <Typography style={jpTheme.textSmall} >Follow on - </Typography>
                        <Link href={props.data.websites.youtube} target="_blank">
                            <YouTubeIcon style={{ padding: "10px 10px 10px 0", fontSize: "2em", color: jpStyle.colorGrey }} />
                        </Link>
                        <Link href={props.data.websites.instagram} target="_blank">
                            <InstagramIcon style={{ padding: "10px", fontSize: "1.8em", color: jpStyle.colorGrey }} />
                        </Link>
                        <Link href={props.data.websites.facebook} target="_blank">
                            <FacebookIcon style={{ padding: "10px", fontSize: "1.8em", color: jpStyle.colorGrey }} />
                        </Link>
                    </Box>
                </Grid>
                {/* <Grid item xs={12} md={6} direction="column" alignItems="center" justify="center">
                    <img style={{
                        height: props.height,
                        width: props.width,
                        backgroundImage: `url(${props.data.filepath})`,
                        backgroundSize: "cover"
                        // backgroundPosition: "center center"
                    }} />
                </Grid> */}
                <Grid item xs={12} md={6}>
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={props.data.filepath}
                        />
                    </Card>
                </Grid>
            </Grid>
        </div >
    }

    return (data);
}
