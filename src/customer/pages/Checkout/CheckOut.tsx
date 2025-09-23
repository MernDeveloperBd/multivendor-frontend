import { Button } from "@mui/material";
import AddressCard from "./AddressCard";
import { Add } from "@mui/icons-material";
import { useState } from "react";

const CheckOut = () => {
  const [selectedAddress, setSelectedAddress] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAddress(Number(e.target.value));
  };

  return (
    <div className="pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen">
      <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 gap-9">
        <div className="col-span-2 space-y-5">
          {/* Section Header */}
          <div className="flex justify-between items-center">
            <span className="font-semibold">Select Delivery Address</span>
            <Button variant="outlined">Add New Address</Button>
          </div>

          {/* Saved Address List */}
          <div className="text-xs font-medium space-y-5">
            <p>Saved Address</p>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((item, index) => (
                <AddressCard
                  key={index}
                  value={index}
                  selectedValue={selectedAddress}
                  handleChange={handleChange}
                />
              ))}
            </div>
          </div>

          {/* Add new address box */}
          <div className="py-4 px-5 rounded-md border border-gray-300">
            <Button startIcon={<Add />}>Add new address</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;