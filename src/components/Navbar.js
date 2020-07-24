import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import { jpStyle, jpTheme } from '../styles/global';

const useStyles = makeStyles((theme) => ({
    // root: {
    //     flexGrow: 1,
    //     fontSize:"0.8em"
    // },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Navbar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none', color: "#555" }}>
                <Toolbar>
                    {/* <Typography variant="h6" className={classes.title} 
                    style={{ "fontFamily": jpStyle.fontFamilyDancingScript, color:"#fff" }}>
                        Jinraj & Praveen Arts
                    </Typography> */}
                    <Box display={{ xs: 'none', md: 'block', lg: 'block' }}>
                        <Button color={"inherit"} style={jpTheme.buttonBorderless}>home</Button>
                        <Button color={"inherit"} style={jpTheme.buttonBorderless}>portfolio</Button>
                        <Button color={"inherit"} style={jpTheme.buttonBorderless}>about us</Button>
                        <Button color={"inherit"} style={jpTheme.buttonBorderless}>contact</Button>
                    </Box>
                    <Box display={{ xs: 'block', md: 'none', lg: 'none', flex: 1 }}>
                        <IconButton edge="start"
                            className={classes.menuButton}
                            color="inherit" aria-label="menu" onClick={handleClick}>
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}>
                        <MenuItem onClick={handleClose}>home</MenuItem>
                        <MenuItem onClick={handleClose}>portfolio</MenuItem>
                        <MenuItem onClick={handleClose}>about us</MenuItem>
                        <MenuItem onClick={handleClose}>contact</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    );
}