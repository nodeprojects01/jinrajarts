import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { jpStyle, jpTheme } from '../styles/global';

export default function Tags(props) {
    
    const handleChange = (event, newValue) => {
        props.setValue(props.data[newValue]);
    };

    return (
        <Paper elevation={0} square>
            <Tabs
                centered
                value={props.value}
                TabIndicatorProps={{style: {background: jpStyle.colorGreyLight}}}
                onChange={handleChange}
                variant="standard"
            >
                {props.data.map((item) => (
                    <Tab label={item} 
                    style={jpTheme.textSmall}  />
                ))}
            </Tabs>
        </Paper>
    );
}