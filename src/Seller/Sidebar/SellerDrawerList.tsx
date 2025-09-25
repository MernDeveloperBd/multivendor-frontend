import {
    Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Avatar
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { AccountBox, Add, Dashboard, Inventory, Logout, Payment, TranscribeSharp } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router';

const menu = [
    {
        name: "Dashboard",
        icon: <Dashboard className='text-primary-color' />,
        path: "/seller",
        activeIcon: <Dashboard className='text-violet-700' />
    },
    { name: "Orders", icon: <ShoppingCartIcon className='text-primary-color' />, path: "/seller/orders", activeIcon: <ShoppingCartIcon className='text-violet-700' /> },
    { name: "Products", icon: <Inventory />, path: "/seller/products", activeIcon: <Inventory className='text-violet-700' /> },
    { name: "Add Product", icon: <Add />, path: "/seller/add-product", activeIcon: <Add className='text-violet-700' /> },
    { name: "Payment", icon: <Payment />, path: "/seller/payment", activeIcon: <Payment className='text-violet-700' /> },
    { name: "Transaction", icon: <TranscribeSharp />, path: "/seller/transaction", activeIcon: <TranscribeSharp className='text-violet-700' /> }
    
];
const menu2 = [
     { name: "Account", icon: <AccountBox />, path: "/seller/account", activeIcon: <AccountBox className='text-violet-700' /> },
    { name: "Logout", icon: <Logout />, path: "/" },
]

const SellerDrawerList = () => {
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
                    Seller Dashboard
                </Typography>
            </Box>

            <Divider />

            {/* Menu Items */}
            <List sx={{ flexGrow: 1 }}>
                {menu.map((item, index) => (
                    <div key={index} onClick={() => handleClick(item)}>
                        <ListItem disablePadding >
                                <p className={`${location.pathname === item.path ? "bg-teal-700 text-white":"bg-gray-100"} w-full my-[1px] rounded-r-full mr-8`}>
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
            <List sx={{ flexGrow: 1}}>
                {menu2.map((item, index) => (
                    <div key={index} onClick={() => handleClick(item)}>
                        <ListItem disablePadding >
                                <p className={`${location.pathname === item.path ? "bg-teal-700 text-white":"bg-gray-100"} w-full my-[1px] rounded-r-full mr-8`}>
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

export default SellerDrawerList;