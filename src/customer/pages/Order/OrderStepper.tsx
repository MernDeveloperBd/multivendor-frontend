import { CheckCircle, FiberManualRecord } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const steps = [
    {name:"Order placed", description:"on Thu, 15 Aug", value:"PLACED"},
    {name:"Packed", description:"Item packed in dispatch wirehouse", value:"CONFIRMED"},
    {name:"Shipped", description:"Item packed in dispatch wirehouse", value:"SHIPPED"},
    {name:"Arriving", description:"Item packed in dispatch wirehouse", value:"ARRIVING"},
    {name:"Delivered", description:"Item packed in dispatch wirehouse", value:"DELIVERED"},
]

const canceledSted = [
    {name:"Order Placed", description:"Item packed in dispatch wirehouse", value:"PLACED"},
    {name:"Order Cancelled", description:"Item packed in dispatch wirehouse", value:"CANCELLED"}
]
const currentStep = 2

const OrderStepper = ({orderStatus}:any) => {
    const [statusStep, setStatusStep] = useState(steps);

    useEffect(() =>{
        if(orderStatus === 'CANCELLED'){
            setStatusStep(canceledSted)
        }else{
            setStatusStep(steps)
        }
    },[orderStatus]);

    return (
        <Box className="mx-auto my-10">
            {
                statusStep.map((step, index)=>(
                    <>
                    <div key={index} className={`flex px-4`}>
                        <div className="flex flex-col items-center">
                            <Box sx={{zIndex:-1}}
                            className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${index <= currentStep ?"bg-gray-200 text-teal-600":"bg-gray-300 text-gray-800"}`}
                            >
                                {
                                    step.value === orderStatus  ? (
                                        <CheckCircle/>
                                    ):(
                                        <FiberManualRecord sx={{zIndex:-1}}/>
                                    )
                                }
                            </Box>
                            {
                                index < statusStep.length - 1 && (
                                    <div className={`border h-20 w-[2px] ${index < currentStep ? "bg-teal-500":"bg-gray-300 text-gray-800"}`}>

                                    </div>
                                )}
                        </div>
                        <div className={`ml-2 w-full`}>
                            <div className={`${step.value === orderStatus ? "bg-primary-color p-2 text-white font-medium rounded-md -translate-y-3"
                                :""
                                } ${(orderStatus === "CANCELLED" && step.value === orderStatus)?"bg-red-500":""} w-full`}>
                                    <p className={``}>
                                    {step.name}
                                    </p>
                                    <p className={`${step.value === orderStatus ?"text-gray-200":"text-gray-600"} text-xs`}>
                                    {step.description}
                                    </p>

                            </div>

                        </div>

                    </div>
                    </>
                ))
            }
        </Box>
    );
};

export default OrderStepper;