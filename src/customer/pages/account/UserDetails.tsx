import ProfileFieldCard from "./ProfileFieldCard";


const UserDetails = () => {
    return (
        <div className="space-y-5">
            <ProfileFieldCard keys={"Name"} value={"Marifa akter"}/>
            <ProfileFieldCard keys={"Email"} value={"marifa@misam.com"}/>
            <ProfileFieldCard keys={"Mobile"} value={"01749889595"}/>
        </div>
    );
};

export default UserDetails;