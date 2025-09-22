import DealCard from "./DealCard"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Deal = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
        
    };
    return (
        <div className="lg:px-20">
            <h2 className="text-2xl py-2 text-center font-bold mb-4">Todays Deal</h2>
            <div className="slide-container">
                <Slider {...settings}>
                    {
                        [1, 1, 1, 1, 1,1,1,1,1,1,1,1,1,1 ].map((item, index) => <div key={index} className="flex flex-col w-60">
                            <DealCard deal={{ image: "https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752315525/products/wzftctne5xlas96vaufq.jpg", discount: "10%" }} />
                        </div>)
                    }
                </Slider>
            </div>

        </div>
    )
}

export default Deal
