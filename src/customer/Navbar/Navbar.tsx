import { AccountCircle, FavoriteBorder, Menu, Search, ShoppingCart } from "@mui/icons-material";
import { Avatar, Box, Button, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { mainCategory } from "../../data/category/mainCategory";
import { useState } from "react";
import CategorySheet from "./CategorySheet";
import { useNavigate } from "react-router";


const Navbar = () => {
    const theme = useTheme()
    const isLarge = useMediaQuery(theme.breakpoints.up('lg'))
    const [showSheet, setShowSheet] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState("women")
    const navigate = useNavigate()
    return (
        <div className="sticky top-0 left-0 bg-white blur-bg bg-opacity-80 z-40">
            <Box >
                <div className="flex items-center justify-between px-5 lg:px-12 h-[60px] border-b border-gray-200">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                            {!isLarge && <IconButton>
                                <Menu sx={{ fontSize: 29 }} />
                            </IconButton>}
                            <h1 onClick={() => navigate("/")} className="logo cursor-pointer text-[18px] font-bold">MM Fashion World</h1>
                        </div>
                        {/* menu */}
                        <ul className="flex items-center font-medium text-gray-800 text-[14px]">
                            {
                                mainCategory.map((item) => <li key={item?.categoryId}
                                    onMouseLeave={() => {
                                        setShowSheet(false)
                                    }}
                                    onMouseEnter={() => {
                                        setShowSheet(true)
                                        setSelectedCategory(item?.categoryId)
                                    }}
                                    className="mainCategory hover:text-teal-700 cursor-pointer hover:border-b-2 h-[70px] px-2 border-teal-600 flex items-center">{item?.name}</li>)
                            }
                        </ul>
                    </div>
                    <div className="flex items-center gap-1">
                        <IconButton>
                            <Search sx={{ fontSize: 22 }} />
                        </IconButton>
                        {true ? <Button onClick={()=>navigate('/account')} className="flex gap-1 items-center" ><Avatar src="https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752324558/products/gt2pout8feanpscvl9ev.jpg" sx={{ width: 25, height: 25 }} /><h2>MM Fashion</h2></Button>
                         : 
                         <Button onClick={()=>navigate('/login')} variant="contained" size="small" startIcon={<AccountCircle />}>
                            Login
                        </Button>}
                        <IconButton>
                            <FavoriteBorder sx={{ fontSize: 20 }} />
                        </IconButton>
                        <IconButton onClick={() => navigate("/cart")}>
                            <ShoppingCart sx={{ fontSize: 20 }} />
                        </IconButton>
                        <h3 onClick={()=>navigate('/become-seller')} className="border border-teal-500 px-2 py-1 rounded-md hover:bg-teal-700 cursor-pointer hover:text-white transition-all duration-500">Become a seller</h3>
                    </div>
                </div>
                {
                    showSheet && <div
                        onMouseLeave={() => setShowSheet(false)}
                        onMouseEnter={() => setShowSheet(true)}
                        className="categorySheet absolute top-[4rem] left-20 right-20">
                        <CategorySheet selectedCategory={selectedCategory} setShowSheet={setShowSheet} />
                    </div>
                }
            </Box>
        </div>
    );
};

export default Navbar;