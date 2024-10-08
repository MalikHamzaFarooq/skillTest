import * as React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { Inbox as InboxIcon, Mail as MailIcon, ExpandLess, ExpandMore } from '@mui/icons-material';
import { AppBar, Box, MenuItem, Select, Toolbar, Typography, IconButton, useTheme } from "@mui/material";
import { Link } from "react-router-dom"; 
import MenuIcon from '@mui/icons-material/Menu'; 

const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const { window, children } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [openMail, setOpenMail] = React.useState(false);
    const theme = useTheme(); 

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleDrawerClose = () => {
        setMobileOpen(false);
    };

    const handleMailClick = () => {
        setOpenMail(!openMail);
    };

    const drawer = (
        <div>
            <h2>Skill Test</h2>
            <List>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/about-us">
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary="About Us" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItemButton onClick={handleMailClick}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Services" />
                    {openMail ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openMail} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }} component={Link} to="/services">
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText primary="Services for business" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} component={Link} to="/services">
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText primary="Services for individuals" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} component={Link} to="/services">
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText primary="Specialist Service" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }} 
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box sx={{ flexGrow: 1 }} />
                    <Box component="span" sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                        <Typography
                            component={Link}
                            to="/"
                            sx={{
                                textDecoration: "none",
                                color: 'white', 
                                cursor: "pointer",
                                "&:hover": {
                                    textDecorationColor: "#0087b0",
                                },
                            }}
                        >
                            Home
                        </Typography>
                        <Select
                            defaultValue=""
                            displayEmpty
                            sx={{
                                color: 'white',
                                border: "none",
                                cursor: "pointer",
                                "& fieldset": {
                                    border: "none",
                                },
                                "&:hover": {
                                    textDecorationColor: "#0087b0",
                                },
                                "& .MuiSelect-select:focus": {
                                    backgroundColor: "transparent",
                                },
                                "& .MuiSelect-icon": {
                                    color: 'white',
                                },
                            }}
                            renderValue={() => "About Us"}
                        >
                            <MenuItem component={Link} to="/about-us" value="overview" sx={{ color: 'black' }}>
                                Overview
                            </MenuItem>
                            <MenuItem component={Link} to="/about-us" value="testimonial" sx={{ color: 'black' }}>
                                Testimonial
                            </MenuItem>
                        </Select>
                        <Select
                            defaultValue=""
                            displayEmpty
                            sx={{
                                color: 'white', 
                                cursor: "pointer",
                                "& fieldset": {
                                    border: "none",
                                },
                                "&:hover": {
                                    textDecorationColor: "#0087b0",
                                },
                                "& .MuiSelect-select:focus": {
                                    backgroundColor: "transparent",
                                },
                                "& .MuiSelect-icon": {
                                    color: 'white',
                                },
                            }}
                            renderValue={() => "Services"}
                        >
                            <MenuItem component={Link} to="/services" value="overview" sx={{ color: 'black' }}>
                                Overview
                            </MenuItem>
                            <MenuItem component={Link} to="/services" value="services-for-business" sx={{ color: 'black' }}>
                                Services for Business
                            </MenuItem>
                            <MenuItem component={Link} to="/services" value="services-for-individuals" sx={{ color: 'black' }}>
                                Services for Individuals
                            </MenuItem>
                            <MenuItem component={Link} to="/services" value="specialist-service" sx={{ color: 'black' }}>
                                Specialist Service
                            </MenuItem>
                        </Select>
                    </Box>
                </Toolbar>
            </AppBar>

            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, 
                    }}
                    sx={{
                        background: '#535454',
                        color: '#fff',
                        display: { xs: 'block', sm: 'none' }, 
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        background: '#535454',
                        color: '#fff',
                        display: { xs: 'none', sm: 'block' }, 
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    window: PropTypes.func,
    children: PropTypes.node, 
};

export default ResponsiveDrawer;
