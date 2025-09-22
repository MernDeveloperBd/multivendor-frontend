

const HomeCategoryCard = () => {
    return (
        <div>
            
            <div className="flex gap-3 flex-col justify-center items-center group cursor-pointer">
            <div className="custom-border w-[90px] lg:w-[110px] h-[90px] lg:h-[110px] bg-teal-400 rounded-full">
                <img className="group-hover:scale-95 transition-transform transform duration-700 object-cover object-top h-full w-full rounded-full" src="https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752315529/products/jvyug91vbnosvwnbvwuo.jpg" alt="home category image" />
            </div>
            <h2 className="font-medium">{"Women Fashon"}</h2>
        </div>
        </div>
    );
};

export default HomeCategoryCard;