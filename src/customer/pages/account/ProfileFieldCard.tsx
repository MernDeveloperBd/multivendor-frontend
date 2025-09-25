import { Divider } from "@mui/material";


const ProfileFieldCard = ({keys, value}:any) => {
    return (
        <div className="p-3 flex items-center bg-slate-50">
            <p className="w-20 lg:w-36 pr-5">{keys}</p>
            <Divider/>
            <p className="pl-4 lg:pl-10 font-semibold lg:text-[14px]">{value}</p>
        </div>
    );
};

export default ProfileFieldCard;