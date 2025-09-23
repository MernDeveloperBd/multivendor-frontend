import ProductCard from "../ProductCard";
  const product = {
    images: [
      "https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752324558/products/gt2pout8feanpscvl9ev.jpg",
      "https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752324558/products/gt2pout8feanpscvl9ev.jpg",
      "https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752324558/products/gt2pout8feanpscvl9ev.jpg",
      "https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752324558/products/gt2pout8feanpscvl9ev.jpg",
      "https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752315529/products/jvyug91vbnosvwnbvwuo.jpg",
      "https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752324558/products/gt2pout8feanpscvl9ev.jpg",
      "https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752312013/products/poykyze1qndmxlsqhtay.jpg"
    ],
    seller: {
      businessDetails: {
        businessName: "MM Fashion World"
      }
    }
  }

const SimilarProducts = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-between gap-4 gap-y-8">
            {
                [1,2,3,4,5,6,7].map((item, index)=><ProductCard key={index} item={product}/>)
            }
        </div>
    );
};

export default SimilarProducts;