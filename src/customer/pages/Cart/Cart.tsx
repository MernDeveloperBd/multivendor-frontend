import { Favorite, LocalOffer } from "@mui/icons-material";
import CartItemCard from "./CartItemCard";
import { Button, TextField } from "@mui/material";
import PricingCard from "./PricingCard";


const Cart = () => {
    return (
        <div className='pt-10 px-5 sm:px-10 md:px-60 min-h-screen'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <div className="lg:col-span-2 space-y-3">
                    {
                        [1, 2, 3, 4].map((item, index) => <CartItemCard />)
                    }
                </div>
                <div className="col-span-1 text-sm space-y-3">
                    <div className="border border-gray-300 rounded-md px-5 py-3 space-y-5">
                        <div>
                            <div className="flex gap-3 text-sm items-center">
                                <LocalOffer color="primary" sx={{fontSize:"17px"}}/>
                                <span>Apply coupon</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <TextField placeholder="coupon code" size="small"/>
                            <Button size="small">Apply</Button>
                        </div>

                    </div>
                    <section className="border border-gray-300 rounded-md">
                        <PricingCard/>
                        <div className="p-5">
                            <Button sx={{py:"6px"}} fullWidth variant="contained">Buy now</Button>
                        </div>
                    </section>

                    <div className="border border-gray-300 rounded-md px-5 py-4 flex justify-between items-center cursor-pointer">
                        <span>Add from wishlish</span>
                        <Favorite color="primary"/>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Cart;