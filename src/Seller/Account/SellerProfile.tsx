import { Edit } from "@mui/icons-material";
import { Avatar, Button, Divider } from "@mui/material";
import ProfileFieldCard from "../../customer/pages/account/ProfileFieldCard";
import BusinessDetails from "./BusinessDetails";


const SellerProfile = () => {
    return (
        <div className="lg:px-20 pt-5 pb-20 space-y-10 overflow-y-scroll">
            <div className="w-full lg:w-[70%]">
                <div className="flex items-center justify-between pb-3">
                    <h1 className="font-bold text-xl">Seller Details</h1>
                    <div>
                        <Button className="w-16 h-16">
                                <Edit/>
                        </Button>
                    </div>
                </div>
                <div>
                    <Avatar sx={{width:"10rem", height:"10rem"}} 
                    src="https://res.cloudinary.com/dpd5xwjqp/image/upload/v1757668954/Misam_Marifa_Fashion_World_oo94yx.png"
                    />
                    <div>
                        <ProfileFieldCard keys={"Seller Name"} value={"Marifa akter"}/>
                        <Divider/>
                        <ProfileFieldCard keys={"Email"} value={"marifa@misam.com"}/>
                          <Divider/>
                        <ProfileFieldCard keys={"Mobile"} value={"0174989595"}/>
                    </div>
                </div>
            </div>
          <BusinessDetails/>
            
        </div>
    );
};

export default SellerProfile;