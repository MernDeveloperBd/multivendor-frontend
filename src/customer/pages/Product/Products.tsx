import { useState } from "react";
import FilterSection from "./FilterSection";
import { Divider, Pagination } from "@mui/material";
import ProductCard from "./ProductCard";

const Products = () => {
  const [sort, setSort] = useState("low-high");


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

  return (
    <div className="p-4">
      {/* Page Heading */}
      <h1 className="text-3xl text-center font-black text-gray-700 pb-5 uppercase">
        Women Sarees
      </h1>

      {/* Layout */}
      <div className="flex flex-wrap">
        {/* Sidebar */}
        <div className="w-full md:w-1/5 p-4">
          <FilterSection />
        </div>

        {/* Main Content */}
        <div className="w-full md:w-4/5 bg-white p-4">
          {/* Sort Bar */}
          <div className="flex justify-end mb-4">
            <label htmlFor="sort" className="font-medium text-gray-700 mr-2">
              Sort:
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1 text-sm focus:ring focus:ring-indigo-200"
            >
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>

          <Divider />
          {/* Product Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 px-3 justify-center mt-5">
            {
              [1, 1, 1, 1, 1, 1, 1].map((item, index) => <div key={index * 3}>
                <ProductCard item={product} />
              </div>)
            }
          </div>
          {/* pagination */}
         <div className="flex flex-col items-center justify-center mt-4">
           <Pagination count={10} color="primary" />
         </div>
        </div>
      </div>
    </div>
  );
};

export default Products;