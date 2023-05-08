 


import { NavLink } from 'react-router-dom';
import dashboardinactive from './images/dashboardinactive.svg';
 import projectinactive from './images/projectinactive.svg';
 import projectlistinactive from './images/projectlistinactive.svg';
import { Menu, MenuItem } from 'react-pro-sidebar';
const Header = () => {
  
  
  return (
    <>

    <Menu style={{display:'flex',height:'750px',width:"80px"}}>
    <MenuItem style={{marginTop:"300px"}}><NavLink  to="/dashboard"> <img src={dashboardinactive} alt="dashboard" /></NavLink></MenuItem>
    <MenuItem><NavLink to="/projectListing"> <img src={projectlistinactive} alt="projectlist" /></NavLink></MenuItem>
    <hr/>
    <MenuItem><NavLink to="/createProject"> <img src={projectinactive} alt='createproject' /></NavLink></MenuItem>
  </Menu>
 
  </>

  )
}

export default Header