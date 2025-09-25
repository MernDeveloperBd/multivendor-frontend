import {
    Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Avatar
} from '@mui/material';
import { RiCoupon2Line } from "react-icons/ri";
import {  Add, Category, Dashboard, ElectricBolt, Home, LocalOffer, Logout } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router';

const menu = [
    {
        name: "Dashboard",
        icon: <Dashboard className='text-primary-color' />,
        path: "/admin",
        activeIcon: <Dashboard className='text-white' />
    },
    { name: "Coupons", icon: <RiCoupon2Line size={24} className='text-primary-color' />, path: "/admin/coupon", activeIcon: <RiCoupon2Line className='text-white' /> },

    { name: "Add Coupon", icon: <Add />, path: "/admin/add-coupon", activeIcon: <Add className='text-white' /> },

    { name: "Home page", icon: <Home />, path: "/admin/home-grid", activeIcon: <Home className='text-white' /> },

    { name: "Women Category", icon: <ElectricBolt />, path: "/admin/women-category", activeIcon: <ElectricBolt className='text-white' /> },

    { name: "Shop By Category", icon: <Category />, path: "/admin/shop-by-category", activeIcon: <Category className='text-white' /> },
    
    { name: "Deals", icon: <LocalOffer />, path: "/admin/deals", activeIcon: <LocalOffer className='text-white' /> },

];
const menu2 = [

    { name: "Logout", icon: <Logout />, path: "/" },
]

const AdminDrawerList = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogOut = () => {
        console.log("logout");

    }

    const handleClick = (item: any) => {
        if (item.name === "Logout") {
            handleLogOut()
        }
        navigate(item.path)
    }


    return (
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Logo and Header */}
            <Box
                sx={{
                    p: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    bgcolor: 'primary.main',
                    color: 'white'
                }}
            >
                <Avatar
                    src="https://via.placeholder.com/80"
                    alt="Logo"
                    sx={{ width: 64, height: 64, mb: 1 }}
                />
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                    Admin Dashboard
                </Typography>
            </Box>

            <Divider />

            {/* Menu Items */}
            <List sx={{ flexGrow: 1 }}>
                {menu.map((item, index) => (
                    <div key={index} onClick={() => handleClick(item)}>
                        <ListItem disablePadding >
                            <p className={`${location.pathname === item.path ? "bg-teal-800 text-white" : "bg-gray-100"} w-full my-[1px] text-teal-600 rounded-r-full mr-2`}>
                                <ListItemButton >
                                    <ListItemIcon >
                                        {
                                            location.pathname === item.path ? item.activeIcon : item.icon
                                        }

                                    </ListItemIcon>
                                    <ListItemText primary={item.name} />
                                </ListItemButton>
                            </p>
                        </ListItem>
                    </div>

                ))}
            </List>
            {/* Bottom divider */}
            <Divider />
            {/* Menu Items */}
            <List sx={{ flexGrow: 1 }}>
                {menu2.map((item, index) => (
                    <div key={index} onClick={() => handleClick(item)}>
                        <ListItem disablePadding >
                            <p className={`${location.pathname === item.path ? "bg-teal-700 text-white" : "bg-gray-100"} w-full my-[1px] rounded-r-full mr-8`}>
                                <ListItemButton >
                                    <ListItemIcon >
                                        {
                                            location.pathname === item.path ? item.activeIcon : item.icon
                                        }
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} />
                                </ListItemButton>
                            </p>
                        </ListItem>
                    </div>

                ))}
            </List>
            <Divider />

            {/* Additional footer if needed */}
            <Box sx={{ p: 2, textAlign: 'center', color: 'text.secondary' }}>
                <Typography variant="caption">
                    © 2025 MM Fashion World
                </Typography>
            </Box>
        </Box>
    );
};

export default AdminDrawerList;