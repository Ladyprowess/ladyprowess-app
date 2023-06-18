import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { IoMdMenu } from "react-icons/io";
import logo from '../../assets/images/Logo 1.svg'

import './Topmenu.css'
import {useNavigate, useLocation} from 'react-router-dom'
import SupportButton from '../Button/SupportButton';


const useStyles = makeStyles({
  list: {
    width: 350,
    background: "#507b80"
    
  },
  fullList: {
    width: 'auto',
    height: 'fit-content',
    background: "#507b80"
  },

});

export default function Sidebar() {

  const navigation = useNavigate()
  let location = useLocation()


  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
    >
      <List style={{ padding: "30px 10px", display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <ListItem
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}>
          <ListItemText
          onClick={()=>navigation('/')}>
            <img src={logo} width="190px" alt=''/>
          </ListItemText>
        </ListItem>

        <ListItem
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}>
          <ListItemText  
            onClick={()=>navigation('/')}
            className={location.pathname === "/" ?'linksContLinkActive' : "linksContLink"}
            >Home</ListItemText>
        </ListItem>

        <ListItem onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}>
          <ListItemText 
          onClick={()=>navigation('/about')}
          className={location.pathname === "/about" ?'linksContLinkActive' : "linksContLink"}>About Us</ListItemText>
        </ListItem>

        <ListItem onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}>
          <ListItemText 
          onClick={()=>navigation('/profile')}
          className={location.pathname === "/profile" ?'linksContLinkActive' : "linksContLink"}>Profile</ListItemText>
        </ListItem>

        <ListItem onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}>
          <ListItemText 
          onClick={()=>navigation('')}
          className={location.pathname === "" ?'linksContLinkActive' : "linksContLink"}>Resources</ListItemText>
        </ListItem>

        {/* <Divider /> */}

        <ListItem onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}>
          <ListItemText 
          onClick={()=>navigation('/')}
          className={location.pathname === "" ?'linksContLinkActive' : "linksContLink"}>Blog</ListItemText>
        </ListItem>

        

        

        <ListItem>
          <SupportButton
            type='button'
            txtColor='#507b80'
            pd='6px'
            br='5px'
            fs='14px'
            w='120px'
            bg='#fff'
            hoverBG=''
            txt="Support Us"
            fw='500'
            border="1px solid fff"
            onClick={() => { }} />
        </ListItem>

      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className='sideBarDrawer'>
            <IoMdMenu onClick={toggleDrawer(anchor, true)}
              style={{ fontSize: "30px" }}>
              {anchor}
            </IoMdMenu>
            <img src={logo} onClick={()=>navigation('/')} alt='Ladyprowess logo'/>
          </div>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
