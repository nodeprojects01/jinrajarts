import React from 'react';
import Grid from '@material-ui/core/Grid';
import imageVariable from '../Variables/imageVariable'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import {makeStyles} from '@material-ui/core/styles'
const useStyles= makeStyles(theme=>({   
    mainPic: {
        maxWidth: 300,
        padding: '1em',
      },
      content: {
        padding:'4em',
        borderRadius:'0px'
      }
}));

export default function Navbar() {
    const classes=useStyles();
    
    return(<div style={{padding:'0px 50px 0px 50px'}}>
       <Grid container spacing={4}>
           {imageVariable.map((row)=>(
               <Grid item xs={4}>                 
                   <Card elevation={0} className={classes.content} style={row.OuterColor} >      
                    {(row.innerBorder=='enable')?
                    <img className={classes.mainPic} style={row.innerBorderColor}  src={row.image}/>
                    :
                    <img className={classes.mainPic} style={{padding:0}}  src={row.image}/>
                    }
                   </Card>
                </Grid>
           ))

           }
       </Grid>
    </div>)
}