import React, { useState } from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { jpStyle, jpTheme } from '../styles/global';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CTextField from './CTextField';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  form: {
    backgroundColor: '#fff',
    margin: 'auto',
    padding: '2em',
    borderRadius: '5px'
  },
  button: {
    marginTop: theme.spacing(5),
    backgroundColor: jpStyle.colorGreen
  },
}));

export default function SendEmail() {
  const classes = useStyles();
  const [emailMessage, setEmailMessage] = useState({
    name: '',
    email: '',
    subject: 'Jinraj_ARTS',
    message: ''
  });

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post('/send', { ...emailMessage })
      .then(response => {
        console.log(response.data);
        setEmailMessage({
          name: '',
          email: '',
          subject: 'Jinraj_ARTS',
          message: ''
        });
      })
      .catch(() => {
        console.log({
          success: false,
          message: 'Something went wrong. Try again later'
        });
      });


  }
  const handleInputchange = (e) => {
    const { name, value } = e.target;
    setEmailMessage({ ...emailMessage, [name]: value })
  }
  return (
    <Grid container spacing={4} >
      <Grid item xs={12} md={12} align="center">
        <Typography variant="h1" style={jpTheme.subheader_c}>CONTACT US</Typography>
      </Grid>
      <Grid item xs={10} md={5} className={classes.form} style={{ padding: '2em' }}>

        <CTextField
          label="Name"
          name="name"
          value={emailMessage.name}
          onChange={handleInputchange}
        />

        <CTextField
          label="Email"
          name="email"
          value={emailMessage.email}
          onChange={handleInputchange} />

        <CTextField
          label="Message"
          name="message"
          value={emailMessage.message}
          onChange={handleInputchange} />

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SendIcon />}
          onClick={handleSubmit}
        >
          Send
                 </Button>


      </Grid>
      <Grid item xs={12} md={12}>
      </Grid>
    </Grid>
  )
}

