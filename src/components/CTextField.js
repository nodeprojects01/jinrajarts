import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { jpStyle, jpTheme } from '../styles/global';

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: jpStyle.colorGreen,
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: jpStyle.colorGreen,
        },
        '& .MuiOutlinedInput-inputMarginDense': {
            padding: "1em"
        },
        '& .MuiInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'yellow',
            },
          },
    },
   
})(TextField);

export default function CTextField(props) {

    return (
        <div>
            <CssTextField
                id="standard-basic"
                label={props.label}
                select={props.select ? true : false}
                multiline={props.multiline ? true : false}
                rows={props.rows}
                placeholder={props.placeholder}
                fullWidth
                name={props.name}
                value={props.value}
                margin="normal"
                autoFocus={props.autoFocus}
                onChange={props.onChange}
                onKeyPress={props.onKeyPress}
               
              
            > {props.select ? props.children : ""} </CssTextField>
        </div>
    )
}