
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ toggleDrawer, drawerOpen }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerOpen ? 240 : 0}px)` },
        ml: { sm: drawerOpen ? '240px' : '0' },
        transition: 'margin 0.3s ease, width 0.3s ease',
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="toggle drawer"
          edge="start"
          onClick={toggleDrawer}
          sx={{ mr: 2 , zIndex:50}}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          MM Fashion World
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;