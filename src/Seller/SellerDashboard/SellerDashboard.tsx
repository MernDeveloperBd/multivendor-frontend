// SellerDashboard.js
import  { useState } from 'react';
import { Box, CssBaseline, Drawer } from '@mui/material';
import SellerDrawerList from '../Sidebar/SellerDrawerList';
import Navbar from '../../Common/Navbar';
import SellerRoutes from '../../router/SellerRouter';

const drawerWidth = 240;

const SellerDashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Navbar 
        toggleDrawer={toggleDrawer} 
        drawerOpen={drawerOpen} 
      />
      
      {/* Mobile Drawer */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={toggleDrawer}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth 
            },
          }}
        >
          <SellerDrawerList />
        </Drawer>

        {/* Desktop Drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              transform: drawerOpen ? 'none' : `translateX(-${drawerWidth}px)`,
              transition: 'transform 0.3s ease'
            },
          }} 
          open
        >
          <SellerDrawerList />
        </Drawer>
      </Box>

      <Box 
        component="main"
        sx={{ 
          flexGrow: 1, 
          pt: 10 , px:2,
          width: { sm: `calc(100% - ${drawerOpen ? drawerWidth : 0}px)` },
          transition: 'width 0.3s ease',
          
        }} 
      >      
         {/*Outlet content  */}
        <SellerRoutes/>
      </Box>
    </Box>
  );
};

export default SellerDashboard;