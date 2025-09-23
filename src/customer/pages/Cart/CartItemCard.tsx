import { Add, Close, Remove } from "@mui/icons-material";
import { Button, Divider, IconButton } from "@mui/material";


const CartItemCard = () => {
    return (
        <div className='border border-gray-300 rounded-md relative'>
            <div className='p-5 flex gap-3 '>
                <div>
                    <img className='w-[90px] rounded-md' src="https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752324558/products/gt2pout8feanpscvl9ev.jpg" alt="cartItemCardImage" />
                </div>
                <div className="space-y-2">
                    <h1 className="font-semibold text-lg">Cotton three piece </h1>
                    <p className="text-gray-600 font-medium text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                    <p className="text-gray-400 text-xs"><strong>Sold By:</strong> Kekakata bazar bd</p>
                    <p className="text-xs">
                        <strong>7 days replacement</strong> Available
                    </p>
                    <p className="text-xs text-gray-600">
                        <strong>Quantity</strong> :2
                    </p>

                </div>

            </div>
            <Divider />
            <div className="px-5 p-2 flex justify-between items-center">
                <div className="flex items-center gap-2 w-[140px] justify-between">
                    <Button size="small"><Remove /></Button>
                    <span className="px-3 font-semibold">{2}</span>
                    <Button size="small"><Add /></Button>
                </div>
                <div>
                    <p className="text-gray-700 font-semibold">TK 1700</p>
                </div>
            </div>
            <div className="absolute top-1 right-1">
        <IconButton color="primary" ><Close /></IconButton>
            </div>

        </div>
    );
};

export default CartItemCard;