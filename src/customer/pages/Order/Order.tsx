
import OrderItemCard from "./OrderItemCard";

const Order = () => {
    
    return (
        <div className='text-sm min-h-screen'>
            <div className='pb-5'>
                <h1 className='font-semibold'>All Orders</h1>
                <p>From anytime</p>
            </div>
            <div className="space-y-2">
                {
                    [1, 2, 3].map((item, index) => <OrderItemCard  key={index} />)
                }
            </div>

        </div>
    );
};

export default Order;