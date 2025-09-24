import HomeCategoryCard from "./HomeCategoryCard";


const HomeCategory = () => {
    return (
        <div>
             <h2 className="text-2xl py-2 text-center font-bold mb-4">Shop By Category</h2>
              <div className="lg:px-12 flex justify-center gap-7 flex-wrap">
            {
                [1,1,1,1,1,1,1].map((item)=> <HomeCategoryCard />)
            }
           
        </div>
        </div>
       
    );
};

export default HomeCategory;