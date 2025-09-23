import { useEffect, useState } from "react";
import './productCard.css'

const ProductCard = ({ item }: any) => {
    const [currentImage, setCurrentImage] = useState(3)
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        let interval: any;
        if (isHovered) {
            interval = setInterval(() => setCurrentImage((prev) => (prev + 1) % item.images.length), 1000)
        } else if (interval) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isHovered, item.images.length]);

    return (
        <div className="group px-3 relative">
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative w-full h-[260px] overflow-hidden">
                {
                    item?.images?.map((image: string, index: number) => <img key={index}
                        src={image}
                        alt="product_image"
                        className="card-media object-top"
                        style={{ transform: `translateX(${(index - currentImage) * 100}%)` }} />

                    )
                }
            </div>
            {/* details */}
            <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
                    <div className="name space-y">
                        <h1 className="font-semibold text-md">
                            {item?.seller?.businessDetails?.businessName}
                        </h1>
                        <p className="text-base">Fashional party dress</p>
                    </div>
                    <div className="price flex items-center gap-3 ">
                        <span className="font-semibold text-teal-600 text-[14px]">TK 1500</span>
                        <span className="text font-thin line-through text-gray-500 text-[12px]">TK 1700</span>
                        <span className="font-semibold text-teal-700 text-[14px]">12% off</span>
                    </div>
                    <div className="price flex items-center gap-3 ">
                        <span className="font-semibold text-teal-600 text-[14px]">Ratings</span>
                        <span className="font-semibold text-violet-700 text-[12px]">Reselling:TK 1200</span>
                        
                    </div>
            </div>
        </div>
    );
};

export default ProductCard;