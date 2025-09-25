import { useState } from "react";
import SellerLogin from "./SellerLogin";
import SellerAccountForm from "./SellerAccountForm";
import { Button } from "@mui/material";


const BecomeSeller = () => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <div className="grid md:gap-10 grid-cols-3 min-h-screen px-4">

            <section className="lg:col-span-1 md:col-span-2 col-span-3 shadow-lg rounded-b-md p-5">
                {
                    isLogin ? <SellerLogin /> : <SellerAccountForm />
                }

                <div className="mt-8 space-y-2">
                   {isLogin ? <h1 className="text-center text-sm font-medium">Do not have an account?</h1>:
                   <h1 className="text-center text-sm font-medium">Already have an account?</h1> }
                    <Button onClick={() => setIsLogin(!isLogin)} sx={{ py: "12px" }} fullWidth variant="outlined">
                        {
                            isLogin ? "Register" : "Login"
                        }
                    </Button>
                </div>
            </section>

            {/* right side */}
            <section className="hidden md:block md:col-span-1 lg:col-span-2 ">
                <div className="w-full h-[95vh] mx-auto flex items-center justify-center">
                            <img className="w-full h-[95%] object-cover rounded-md" src="https://res.cloudinary.com/dpd5xwjqp/image/upload/v1758801908/become_a_selelr3_-_mm_fashion_world_tjcqaq.png" alt="" />
                </div>
            </section>
        </div>
    );
};

export default BecomeSeller;