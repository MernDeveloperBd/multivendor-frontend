import WomenCategoryCard from "./WomenCategoryCard"

const womenFashionCategories=[
    {
        section:"WOMEN_CATEGORIES",
        name:"Three piece",
        image:"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752334130/products/xonccjvm5fcn1czbcjzl.jpg",
        categoryId:"threePieces"
    },
    {
        section:"WOMEN_CATEGORIES",
        name:"Lehenga & party Dress",
        image:"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752324558/products/gt2pout8feanpscvl9ev.jpg",
        categoryId:"lehenga&partyDresses"
    },
   
    {
        section:"WOMEN_CATEGORIES",
        name:"Two piece",
        image:"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752312013/products/poykyze1qndmxlsqhtay.jpg",
        categoryId:"twoPieces"
    },
    {
        section:"WOMEN_CATEGORIES",
        name:"Two piece",
        image:"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752312013/products/poykyze1qndmxlsqhtay.jpg",
        categoryId:"twoPieces"
    },
    {
        section:"WOMEN_CATEGORIES",
        name:"Two piece",
        image:"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752312013/products/poykyze1qndmxlsqhtay.jpg",
        categoryId:"twoPieces"
    },
    {
        section:"WOMEN_CATEGORIES",
        name:"Two piece",
        image:"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752312013/products/poykyze1qndmxlsqhtay.jpg",
        categoryId:"twoPieces"
    },
    {
        section:"WOMEN_CATEGORIES",
        name:"Two piece",
        image:"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752312013/products/poykyze1qndmxlsqhtay.jpg",
        categoryId:"twoPieces"
    },
]


const WomenCategory = () => {
  return (
    <div className="flex flew-wrap justify-between py-5 lg:px-12 border-b border-gray-300">
      {
        womenFashionCategories?.map((item, index) =><WomenCategoryCard key={index} item={item}/>)
      }
    </div>
  )
}

export default WomenCategory
