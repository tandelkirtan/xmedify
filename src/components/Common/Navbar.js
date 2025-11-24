
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/logo.png"
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,bg,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const NavBarMenue = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { label: 'Find Doctors', path: '' },
    { label: 'Hospitals', path: '/hospitals' },
    { label: 'Medicines', path: '' },
    { label: 'Surgeries', path: '' },
    { label: 'Software for Provider', path: '' },
    { label: 'Facilities', path: '' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }} role="presentation">
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, mb: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon color='blur'/>
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.label} onClick={handleDrawerToggle} component={Link} to={item.path}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
        <ListItem button onClick={handleDrawerToggle} sx={{ mt: 2 }} component={Link} to="/MyBookings">
          <Button
            variant="contained"
            fullWidth
            sx={{
              textTransform: 'none',
              fontSize: 16,
              backgroundColor: '#2aa7ff',
              color: 'white',
              '&:hover': { backgroundColor: '#1f93e6' },
            }}
          >
            My Bookings
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        background: '#e8f1ff',
        boxShadow: '0 4px 20px 0 rgba(0,0,0,0.1)',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: { xs: 2, sm: 4 },
          py: 1,
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="logo" style={{ height: 48 }} />
        </Link>

        {/* Desktop Menu */}
        {!isMobile && (
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: isActive ? '#1976d2' : '#102851',
                    textTransform: 'none',
                    fontSize: 16,
                    fontWeight: 500,
                    borderBottom: isActive ? '4px solid #1976d2' : 'none',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      borderRadius: 1,
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>
        )}

        {/* My Bookings Button (Desktop) */}
        {!isMobile && (
          <Button
            component={Link}
            to="/MyBookings"
            variant="contained"
            sx={{
              backgroundColor: '#2aa7ff',
              color: 'white',
              textTransform: 'none',
              fontSize: 16,
              fontWeight: 600,
              px: 3,
              py: 1,
              '&:hover': {
                backgroundColor: '#1f93e6',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            My Bookings
          </Button>
        )}

        {/* Mobile Menu Icon */}
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ fontSize: 28, color: '#2aa7ff' }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile Drawer */}
      {isMobile && (
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            '& .MuiDrawer-paper': {
              width: 250,
              backgroundColor: '#f5f5f5',
            },
          }}
        >
          {drawer}
        </Drawer>
      )}
    </AppBar>
  );
}

