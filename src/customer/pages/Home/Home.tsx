
import BecomeASeller from "../../components/BecomeASellerBanner/BecomeASeller";
import Deal from "./Deal/Deal";
import Grid from "./Grid/Grid";
import HomeCategory from "./HomeCategory/HomeCategory";
import WomenCategory from "./WomenCategory/WomenCategory";


const Home = () => {
    return (
        <div className="space-y-8">
            <WomenCategory />
            <section>
                <Grid />
            </section>
            <section>
                <Deal />
            </section>
            <section>
                <HomeCategory />
            </section>
            <section>
                    <BecomeASeller/>
            </section>
        </div>
    );
};

export default Home;