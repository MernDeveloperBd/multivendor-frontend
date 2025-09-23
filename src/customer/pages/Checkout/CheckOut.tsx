import { Box, Button, FormControlLabel, Modal, Radio, RadioGroup } from "@mui/material";
import { Add } from "@mui/icons-material";
import AddressCard from "./AddressCard";
import React, { useState } from "react";
import AddressForm from "./AddressForm";
import PricingCard from "../Cart/PricingCard";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
};

const paymentMethodList = [{ name: "COD" }, { name: "Bkash" }]

const CheckOut = () => {
  const [selectedAddress, setSelectedAddress] = useState(1);
  const[paymentGateway, setPaymentGateway] = useState(paymentMethodList[0].name)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e: any) => {
    setSelectedAddress(e.target.value)
  };

  const handleChangePaymentGateway = (e:any) =>{
    setPaymentGateway(e.target.value)
  }

  return (

    <div className="pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen">
      <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 gap-9">
        <div className="col-span-2 space-y-5">
          {/* Section Header */}
          <div className="flex justify-between items-center">
            <span className="font-semibold text-lg">Select Delivery Address</span>
            <Button onClick={handleOpen} variant="outlined">
              Add New Address
            </Button>
          </div>

          {/* Saved Address List */}
          <div className="text-xs font-medium space-y-5">
            <p>Saved Address</p>
            <div className="space-y-3">
              {
                [1, 2, 3].map((item, index) => <AddressCard value={index} selectedValue={selectedAddress} handleChange={handleChange} key={index} />)
              }
            </div>
          </div>

          {/* Add new address box */}
          <div className="py-4 px-5 rounded-md border border-gray-300">
            <Button onClick={handleOpen} startIcon={<Add />} >
              Add new address
            </Button>
          </div>
        </div>
        {/* right */}
        <div className="col-span-1 text-sm space-y-3">
          <section className="space-y-3 border border-teal-400 p-5 rounded-md">
            <h2 className="text-teal-600 font-medium pb-2">Choose payment method</h2>

            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={paymentGateway}
              onChange={handleChangePaymentGateway}
            >
              {
                paymentMethodList.map((item) => <FormControlLabel value={item?.name} control={<Radio />} label={item?.name} />)
              }
            </RadioGroup>
          </section>
              <section className="border border-gray-300 rounded-md">
                <PricingCard/>
                <div className="p-5">
                <Button variant="contained" fullWidth sx={{py:"11px"}}>CheckOut</Button>
                </div>
              </section>

        </div>
      </div>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddressForm />
        </Box>
      </Modal>
    </div>
  );
};

export default CheckOut;