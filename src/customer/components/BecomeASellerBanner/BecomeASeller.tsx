import { Button } from "@mui/material";
import StoreIcon from '@mui/icons-material/Store';

const BecomeASeller = () => {
    return (
         <section className="lg:px-20 relative h-[200px] lg:h-[450px] object-cover">
                <img src="https://res.cloudinary.com/dpd5xwjqp/image/upload/v1758601022/mm_fashion_world_-_online_shopping_platform_1_r8ehmv.jpg" alt="become_a_seller" />
                <div className="absolute top-1/2 left-4 lg:left-[15rem] transform -translate-y-1/2 font-semibold lg:text-4xl space-y-3">
                <h1>Sell your products</h1>
                <p className="text-lg md:text-2xl">With <strong className="logo text-3xl md:text-5xl pl-2">MM Fashion World</strong></p>
                <div className="pt-6 flex justify-center">
                    <Button startIcon={<StoreIcon/>} variant="contained">Become a seller</Button>
                </div>
                </div>
            </section>
    );
};

export default BecomeASeller;