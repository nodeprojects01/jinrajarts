import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { jpStyle, jpTheme } from '../styles/global';

export default function Tags(props) {
    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper elevation={0} square>
            <Tabs
                centered
                value={value}
                TabIndicatorProps={{style: {background: jpStyle.colorGreyLight}}}
                onChange={handleChange}
                variant="standard"
            >
                {props.data.map((item) => (
                    <Tab label={item} 
                    style={jpTheme.textSmall}/>
                ))}
            </Tabs>
        </Paper>
    );
}