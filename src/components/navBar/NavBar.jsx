import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import CartWidget from '../cartWidget/CartWidget';
import styles from './navBar.module.css';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorElDropdown, setAnchorElDropdown] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleOpenDropdownMenu = (event) => {
        setAnchorElDropdown(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleCloseDropdownMenu = () => {
        setAnchorElDropdown(null);
    };

    return (
        <AppBar position="static" style={{ margin: 0, backgroundColor: '#f5f5f5'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{

                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Futura Bk Bt',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: '#656d4a',
                            textDecoration: 'none',
                        }}
                    >
                        AnDeStudio.
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="#656d4a"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'Futura Bk Bt',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: '#656d4a',
                            textDecoration: 'none',
                        }}
                    >
                        AnDeStudio.
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button 
                            onClick={handleOpenDropdownMenu}
                            sx={{ 
                                my: 2, 
                                color: '#656d4a', 
                                display: 'block', 
                                margin: '20px',  
                                fontFamily: 'Futura Bk Bt', 
                                fontWeight: 500, 
                                border: 'none',
                                boxShadow: 'none', 
                                '&:hover': {
                                    backgroundColor: '#656d4a',  
                                }}}
                        >
                            Productos
                        </Button>
                        <Menu
                            anchorEl={anchorElDropdown}
                            open={Boolean(anchorElDropdown)}
                            onClose={handleCloseDropdownMenu}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <MenuItem  onClick={handleCloseDropdownMenu}sx={{
                                margin: 1,
                                display:'flex',
                                justifyContent: 'left',
                                alignItems: 'center',
                                flexGrow: 1,
                                fontFamily: 'Mulish',
                                fontWeight: 300,
                                color: '#656d4a',
                                textDecoration: 'none',color: '#656d4a',
                                borderColor: 'none'
                            }}>Decoración</MenuItem>
                            <MenuItem  onClick={handleCloseDropdownMenu} sx={{
                                margin: 1,
                                display:'flex',
                                justifyContent: 'left',
                                alignItems: 'center',
                                flexGrow: 1,
                                fontFamily: 'Mulish',
                                fontWeight: 300,
                                color: '#656d4a',
                                textDecoration: 'none',color: '#656d4a' 
                            }}>Muebles</MenuItem>
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Carrito">
                            <Button
                                onClick={handleOpenUserMenu}
                                sx={{
                                    p: 0,
                                    color: '#656d4a',
                                    display: 'block',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '50px',
                                }}
                            >
                            <CartWidget/>
                            </Button>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '48px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;