// SellerDashboard.tsx
import { useState, useEffect } from 'react';
import { Box, CssBaseline, Drawer } from '@mui/material';
import Navbar from '../../Common/Navbar';
import AdminDrawerList from '../Sidebar/AdminDrawerList';
import AdminRoutes from '../../router/AdminRoutes';

const drawerWidth = 240;

const AdminDashboard = () => {
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
          width: { sm: drawerOpen ? drawerWidth : 0 }, // Dynamic width
          flexShrink: 0,
          transition: 'width 0.3s ease' // Smooth transition
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
            <AdminDrawerList />
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
          <AdminDrawerList />
        </Drawer>
      </Box>

      <Box 
        component="main"
        sx={{ 
          flexGrow: 1, 
          pt: 10, 
          px: 3,
          // Corrected styles - no negative margin
          width: '100%', // Always 100% of remaining space
          transition: 'margin 0.3s ease', // Smooth transition
          height: '100vh',
          overflow: 'auto',
          bgcolor: 'background.default'
        }} 
      >      
        {/* Outlet content */}
        <AdminRoutes/>
      </Box>
    </Box>
  );
};

export default AdminDashboard;