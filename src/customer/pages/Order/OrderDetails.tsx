import { Box, Button, Divider } from "@mui/material";
import OrderStepper from "./OrderStepper";
import { Payment } from "@mui/icons-material";

const OrderDetails = () => {
    return (
        <Box className="space-y-5">
            <section className="flex flex-col gap-5 justify-center items-center">
                <img className="w-[70px]" src="https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752324558/products/gt2pout8feanpscvl9ev.jpg" alt="order details image" />
                <div className="text-sm space-y-1 text-center">
                    <h1>{"MM Fashion world"}</h1>
                    <p>{"fashionable dress cootondf titl"}</p>
                    <p><strong>Size</strong>: Free</p>

                </div>
            </section>

            <section className="border border-gray-300 p-5">
                <OrderStepper />
            </section>
            <section className="border border-gray-300 p-5">
                <h2 className="font-bold pb-3">Delivery address</h2>
                <div className="text-sm space-y-2">
                    <div className="flex gap-5 font-medium">
                        <p>Marifa akter</p>
                        <Divider flexItem orientation="vertical" />
                        <p>025485648</p>
                    </div>
                    <p>Dhaka, dhakn, bandlfsf</p>
                </div>
            </section>
            <section className="border border-gray-300 space-y-4">
                <div className="flex justify-between text-sm pt-5 px-5">
                    <div className="space-y-1">
                        <p className="font-black">Total item Price</p>
                        <p>You saved <span className="text-teal-500">Tk 1200 on this item</span></p>

                    </div>
                    <p>TK 1850</p>
                </div>
                <div className="p-5">
                    <div className="bg-teal-50 px-5 py-2 text-xs font-medium flex items-center gap-3 ">
                        <Payment />
                        <p>Pay on delivery</p>
                    </div>
                </div>
                <div>
                    <Divider/>
                </div>
                <div className="px-5 pb-5">
                    <p className="text-xs"><strong>Sold by</strong>: Kenakata bazar bd</p>
                </div>
                <div className="p-10">
                <Button fullWidth variant="outlined">Cancel order</Button>
                </div>

            </section>

        </Box>
    );
};

export default OrderDetails;