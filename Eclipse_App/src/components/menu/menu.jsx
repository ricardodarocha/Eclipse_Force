import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../../style/css/menu.css';
import { Link } from "react-router-dom";
const drawerWidth = 240;
const navItems = ['Home', 'Solar', 'Lunar'];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', color: '#0c1024' }} >
            <Typography variant="h6" sx={{ my: 2 }}>
                <img src='Logo.png' className='logo' />
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <Link to={item} className='btn_menu_mobile'>
                        <ListItem key={item} disablePadding>
                            <ListItemButton sx={{ textAlign: 'center' }} >
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} >
            <CssBaseline />
            <AppBar component="nav" position="static" sx={{ backgroundColor: '#0c1024', zIndex: 20, color: '#FFF' }} >
                <Toolbar >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}
                    >
                        <div className='logo_name'>
                            <img src='Logo.png' className='logo_img' />
                            <div><span>ECLIPSE</span> FORCE</div>
                        </div>
                        <div className='logo'>

                            {navItems.map((item) => (
                                <Link to={item} >
                                    <Button key={item}  >
                                        <span className='itens_menu_text'> {item} </span>
                                    </Button>
                                </Link>
                            ))}

                        </div>
                    </Typography>



                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <a href='https://github.com/kametobu/Eclipse_Force' target='__blanck'>
                            <img src='git.png' className='logo_git' />
                        </a>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{

                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#000' },
                    }}

                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;