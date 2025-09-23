import { Add, AddShoppingCart, Favorite, LocalShipping, Remove, Shield, Star, Wallet, WorkspacePremium } from "@mui/icons-material";
import { Button, Divider } from "@mui/material";
import { useState } from "react";
import SimilarProducts from "./SimilarProducts";


const images = [
    "https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752324558/products/gt2pout8feanpscvl9ev.jpg",
    "https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752324558/products/gt2pout8feanpscvl9ev.jpg",
    "https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752312013/products/poykyze1qndmxlsqhtay.jpg",
    "https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752324558/products/gt2pout8feanpscvl9ev.jpg",
]



const ProductDetails = () => {
    const [currentImage, setCurrentImage] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const handleChangeCurrentImage = (index: number) => setCurrentImage(index)
    const handleChangeQuantity = (value: number) => setQuantity(value + quantity)
    return (
        <div className="min-h-screen px-5 lg:px-20 pt-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <section className="flex flex-col lg:flex-row gap-5">
                    <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
                        {
                            images?.map((item, index) => <img onClick={() => handleChangeCurrentImage(index)} className="lg:w-full w-[50px] cursor-pointer rounded-md" src={item} alt="Product_details_img_left" />)
                        }
                    </div>
                    <div className="w-full lg:w-[85%]">
                        <img src={images[currentImage]} className="w-full rounded-md" alt="product_details_image" />
                    </div>
                </section>
                <section className="space-y-2">
                    <h1 className="font-bold text-lg text-teal-500">MM Fashion Clothings</h1>
                    <p className="text-gray-500 font-semibold">fashion and theree picess for women</p>
                    <div className="flex justify-between items-center py-2 border border-gray-300 rounded-md w-[180px] px-3 mt-5">
                        <div className="flex gap-1 items-center">
                            <span>4</span>
                            <Star color="primary" />
                        </div>
                        <Divider orientation="vertical" flexItem />
                        <span>485 Rating</span>
                    </div>
                    <div className="price flex items-center gap-3 mt-4">
                        <span className="font-semibold text-teal-600 text-[14px]">TK 1500</span>
                        <span className="text font-thin line-through text-gray-500 text-[12px]">TK 1700</span>
                        <span className="font-semibold text-teal-700 text-[14px]">12% off</span>
                    </div>
                    <p className="text-[13px]">Include all taxes. Free shipping over TK 3000</p>
                    <div className="mt-7 space-y-3">
                        <div className="flex items-center gap-2">
                            <Shield color="primary" />
                            <p>Authentic and quality assure</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <LocalShipping color="primary" />
                            <p>Free shipping and reture</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <WorkspacePremium color="primary" />
                            <p>100% money back gurantee</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Wallet color="primary" />
                            <p>Pay on delivery might be available</p>
                        </div>
                    </div>
                    <div className="mt-7 space-y-3">
                        <h2>Quantity</h2>
                        <div className="flex items-center gap-2 w-[140px] justify-between">
                            <Button onClick={() => handleChangeQuantity(-1)} variant="outlined"><Remove /></Button>
                            <span>{quantity}</span>
                            <Button onClick={() => handleChangeQuantity(+1)} variant="outlined"><Add /></Button>
                        </div>
                    </div>

                    <div className="mt-10 flex items-center gap-5">
                        <Button startIcon={<AddShoppingCart />} variant="outlined" fullWidth sx={{ py: '1rem'}}>add to bag</Button>
                        <Button startIcon={<Favorite />} variant="outlined" fullWidth sx={{ py: '1rem' }}>Wishlisht</Button>
                    </div>
                    <div className="mt-7 space-y-3">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis ipsa asperiores tenetur nam blanditiis sint temporibus distinctio itaque. Eius architecto reiciendis provident aut, aperiam dolores! Totam, consequatur doloremque eligendi ex ipsa optio alias accusantium sint earum id placeat voluptates unde quis dicta consectetur, at doloribus suscipit perferendis ab fuga aliquid.</p>
                    </div>
                </section>

            </div>
            {/*  */}
            <section className="mt-20">
                        <h3 className="text-lg font-bold">Similar Products</h3>
                        <div className="pt-5">
                        <SimilarProducts/>
                        </div>
            </section>

        </div>
    );
};

export default ProductDetails;