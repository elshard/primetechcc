import React from 'react';
import logo from './images/logo.svg';
import Header from './Header';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MenuIcon from '@mui/icons-material/Menu';


const Dashboard = () => {
  return (
  <>
 
      <Header/>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
           <ArrowBackIosIcon/>
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
           <h3>Dashboard</h3>
          </Typography>
          <img style={{alignItems:"center",display:'block',justifyContent:'center', marginLeft:'auto',marginRight:'auto'}} src={logo} alt='logo'/>
        </Toolbar>
      </AppBar>
    </Box>
     
      </>
  )
}

export default Dashboard