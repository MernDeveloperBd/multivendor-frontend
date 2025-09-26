import { Button, Step, StepLabel, Stepper } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import BecomeSellerStep1 from "./BecomeSellerStep1";
import BecomeSellerStep2 from "./BecomeSellerStep2";
import BecomeSellerStep3 from "./BecomeSellerStep3";
import BecomeSellerStep4 from "./BecomeSellerStep4";

const steps = ["Tax details & mobile", "Pickup address", "Bank Details", "Business Details"]
const SellerAccountForm = () => {
    const [activeStep, setActiveStep] = useState(0)
    const formik = useFormik({
        initialValues: {
            mobile: "",
            otp: "",
            GSTIN: "",
            pickUpAddress: {
                name: "",
                mobile: "",
                address: "",
                city: "",
                state: "",
                pincode: "",
                locality: ""
            },
            bankDetails: {
                accountHolderName: "",
                accountNumber: "",
                routingNumber: ""
            },
            sellerName: "",
            email: "",
            businessDetails: {
                businessName: "",
                businessEmail: "",
                businessMobile: "",
                logo: "",
                banner: "",
                businessAddress: "",
                businessFbPage: "",
                password:""
            }
        },
        onSubmit: (values) => {
            console.log(values);
            

        }
    })
    return (
        <div className="px-4">            
            <Stepper activeStep={activeStep} alternativeLabel>
                {
                    steps.map((label, index) => (
                        <Step key={index}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))
                }
            </Stepper>
            <div className="mt-6 space-y-4">
                {
                    activeStep == 0 ? (<BecomeSellerStep1 formik={formik}/>) :
                        activeStep == 1 ? (<BecomeSellerStep2 formik={formik}/>) :
                            activeStep == 2 ? (<BecomeSellerStep3 formik={formik}/>) : (<BecomeSellerStep4 formik={formik}/>)
                }
            </div>
            <div className="flex items-center justify-between mt-4">
                <Button 
                variant="contained" 
                disabled={activeStep === 0} 
                onClick={() => setActiveStep(activeStep - 1)}>Back</Button>

                <Button 
                variant="contained"
                 onClick={activeStep === steps.length - 1 ? formik.handleSubmit : () => setActiveStep(activeStep + 1)}>
                    {activeStep === steps.length - 1 ? "Create Account" : "Next"}
                </Button>
            </div>
        </div>
    );
};

export default SellerAccountForm;