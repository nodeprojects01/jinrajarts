import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image1 from "../media/images/background2.jpg";
import Box from '@material-ui/core/Box';
import { jpStyle, jpTheme } from '../styles/global';


const useStyles = makeStyles({
  root: {
    minWidth: "100%",
    '& .MuiCardContent-root': {
      '& .MuiTypography-body1': jpTheme.subTitle,
      '& .MuiTypography-body2': jpTheme.textSmall
    }
  },
  media: {
    height: 200,
  },
});

export default function RecentEvent(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0}  >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.data.filepath}
          // image="https://www.youtube.com/watch?v=50QwDgDlHok&t=48s"
          title="Mixed Art"
        >
          <div style={{ width: "100%", height: "100%", background: "rgba(225,225,225,0.2)" }}></div>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom style={{ fontSize: "1.1em" }}>
            {props.data.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{ fontSize: "0.89em" }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button style={jpTheme.buttonBorderlessGray}>share</Button> */}
        <Button style={jpTheme.buttonBorderlessGray}>know more</Button>
      </CardActions>
    </Card>
  );
}
