import { ElectricBolt } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router";


const OrderItemCard = () => {
    const navigate = useNavigate()
    return (
        <div onClick={()=>navigate(`/account/orders/1/item/1`)} className="text-sm bg-white p-5 space-y-4 border border-gray-200 rounded-md cursor-pointer">
            <div className="flex items-center gap-3">
                <div>
                    <Avatar sizes="small" sx={{ bgcolor: "#00927C" }}>
                        <ElectricBolt />
                    </Avatar>
                </div>
                <div>
                    <h2 className="font-bold text-teal-600"> Pending</h2>
                    <p>Arrived by 12/02/2024</p>
                </div>               

            </div>
             <div className="p-5 bg-teal-50 flex gap-3">
                    <div className="">
                        <img className="w-[70px]" src="https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752324558/products/gt2pout8feanpscvl9ev.jpg" alt="" />
                    </div>
                    <div className="w-full space-y-2">
                         <h2>MM Fashion World</h2>
                         <p>fashional dress cotton title</p>
                         <p><strong>Size</strong>: Free</p>
                    </div>

                </div>

        </div>
    );
};

export default OrderItemCard;