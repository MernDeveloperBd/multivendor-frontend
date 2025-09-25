// SellerDashboard.tsx
import { useState, useEffect } from 'react';
import { Box, CssBaseline, Drawer } from '@mui/material';
import SellerDrawerList from '../Sidebar/SellerDrawerList';
import Navbar from '../../Common/Navbar';
import SellerRoutes from '../../router/SellerRouter';

const drawerWidth = 240;

const SellerDashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <CssBaseline />
      <Navbar 
        toggleDrawer={toggleDrawer} 
        drawerOpen={drawerOpen} 
      />
      
      {/* Drawer */}
      <Box
        component="nav"
        sx={{ 
          width: { sm: drawerWidth }, 
          flexShrink: { sm: 0 },
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
        aria-label="mailbox folders"
      >
        {/* Mobile Drawer */}
        {isClient && (
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
                width: drawerWidth,
                height: '100vh'
              },
            }}
          >
            <SellerDrawerList />
          </Drawer>
        )}

        {/* Desktop Drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              height: '100vh',
              transform: drawerOpen ? 'none' : `translateX(-${drawerWidth}px)`,
              transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              ...(drawerOpen && {
                boxShadow: '2px 0 5px rgba(0,0,0,0.1)'
              })
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
          pt: 10, 
          px: 3,
          width: { sm: `calc(100% - ${drawerOpen ? drawerWidth : 0}px)` },
          transition: 'width 0.3s ease',
          height: '100vh',
          overflow: 'auto',
          bgcolor: 'background.default'
        }} 
      >      
        {/* Outlet content */}
        <SellerRoutes/>
      </Box>
    </Box>
  );
};

export default SellerDashboard;