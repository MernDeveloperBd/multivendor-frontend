import { Divider } from '@mui/material';

const PricingCard = () => {
    return (
        <div className=''>
            <div className='space-y-3 p-5'>
                <div className="flex justify-between items-center">
                    <span>Subtotal</span>
                    <span>TK {1750}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span>Discount</span>
                    <span>TK {50}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span>Shipping charge</span>
                    <span>TK {150}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span>Platform fee</span>
                    <span>Free</span>
                </div>
            </div>
            <Divider/>
            <div className='font-medium px-5 py-2 flex justify-between items-center'>
        <span>Total</span>
                    <span>TK {2750}</span>
            </div>
            
        </div>
    );
};

export default PricingCard;