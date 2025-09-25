import { Edit } from '@mui/icons-material';
import { Button, Divider } from '@mui/material';
import ProfileFieldCard from '../../customer/pages/account/ProfileFieldCard';

const BusinessDetails = () => {
    return (
        <div>
              {/* Business Details */}
             <div className="w-full lg:w-[70%]">
                <div className="flex items-center justify-between pb-3">
                    <h1 className="font-bold text-xl">Business Details</h1>
                    <div>
                        <Button className="w-16 h-16">
                                <Edit/>
                        </Button>
                    </div>
                </div>
                <div>
                   
                    <div>
                        <ProfileFieldCard keys={"Business Detail"} value={"Marifa akter"}/>
                        <Divider/>
                        <ProfileFieldCard keys={"Email"} value={"marifa@misam.com"}/>
                          <Divider/>
                        <ProfileFieldCard keys={"Mobile"} value={"0174989595"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessDetails;