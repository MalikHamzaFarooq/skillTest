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
    const theme = useTheme(); // Use theme to access breakpoints

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
                        <ListItemText primary="Inbox" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/">
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary="Drafts" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItemButton onClick={handleMailClick}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mail" />
                    {openMail ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openMail} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }} component={Link} to="/">
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText primary="All mail" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} component={Link} to="/">
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText primary="Trash" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} component={Link} to="/">
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText primary="Spam" />
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
                        sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }} // Show only on small screens
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
                        display: { xs: 'block', sm: 'none' }, // Show only on xs screens
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
                        display: { xs: 'none', sm: 'block' }, // Show only on sm and up screens
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
                {children} {/* Render the routed components here */}
            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    window: PropTypes.func,
    children: PropTypes.node, // Add children prop type
};

export default ResponsiveDrawer;
