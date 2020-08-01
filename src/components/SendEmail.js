import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { jpStyle, jpTheme } from '../styles/global';
import CTextField from './CTextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  form: {
    backgroundColor: '#fff',
    margin: 'auto',
    padding: '2em',
    borderRadius: '5px',
    width: "70%",

    [theme.breakpoints.down('md')]: {
      width: "70%"
    }
  },
  button: {
    backgroundColor: jpStyle.colorGreen
  },
  message: jpTheme.textSmall,
}));

export default function SendEmail() {
  const classes = useStyles();
  const defaultParams = {
    name: '',
    email: '',
    subject: 'Jinraj_ARTS',
    message: ''
  };
  const [emailMessage, setEmailMessage] = useState(defaultParams);
  const [errorMessage, setErrorMessage] = useState('')
  const handleSubmit = event => {
    setErrorMessage('')
    let errorstatus = validateInput(emailMessage);
    if (errorstatus) {
      console.log(errorstatus)
      setErrorMessage(errorstatus)
    }
    else {
      event.preventDefault();
      axios
        .post('/send', { ...emailMessage })
        .then(response => {
          console.log(response.data);
          setEmailMessage(defaultParams);
        })
        .catch(() => {
          console.log({
            success: false,
            message: 'Something went wrong. Try again later'
          });
        });

    }

  }

  const handleInputchange = (e) => {
    const { name, value } = e.target;
    setEmailMessage({ ...emailMessage, [name]: value })
  }

  return (
    <Box className={classes.form} >
      <CTextField
        label="Name"
        name="name"
        value={emailMessage.name}
        onChange={handleInputchange} />

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

      <Box style={{ marginTop: "2em" }}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleSubmit}>Send</Button>
        {errorMessage != '' &&
          <span className={classes.message} style={{ marginLeft: "1em", color: "red" }}>{errorMessage}</span>
        }
      </Box>

    </Box>
  )
}

function validateInput(emailMessage) {
  if (emailMessage.name == '') {
    return "Please enter the name"
  }
  if (emailMessage.email == '') {
    return "Please enter the email address"
  }
  if (!validateEmail(emailMessage.email)) {
    return "Please enter the correct email address"
  }
  if (emailMessage.message == '') {
    return "Message cannot be empty"
  }

}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}