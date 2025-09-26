import HomeCategoryTable from "./HomeCategoryTable";

const image = "https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752309930/products/oinuzef1irapuysskkba.jpg";

const ShopByCategory = () => {
    return (
        <div>
            <HomeCategoryTable image={image}/>
        </div>
    );
};

export default ShopByCategory;