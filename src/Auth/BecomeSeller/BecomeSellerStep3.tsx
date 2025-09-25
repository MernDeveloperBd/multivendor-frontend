import { Grid2, TextField } from "@mui/material";

const BecomeSellerStep3 = ({ formik }: any) => {
    return (
        <div className="space-y-3">
            <p className="text-xl font-bold text-center pb-2">Bank Details</p>
            <Grid2 container spacing={2}>
                <Grid2 size={{ xs: 12 }}>
                    <TextField
                        fullWidth
                        name="bankDetails.accountHolderName"
                        label="Aaccount Holder Nameame"
                        value={formik.values.bankDetails.accountHolderName}
                        onChange={formik.handleChange}
                        error={formik.touched.accountHolderName && Boolean(formik.errors.accountHolderName)}
                        helperText={formik.touched.accountHolderName && formik.errors.accountHolderName} />

                </Grid2>
                <Grid2 size={{ xs: 12 }}>
                    <TextField
                        fullWidth
                        name="bankDetails.accountNumber"
                        label="Account Number"
                        value={formik.values.bankDetails.accountNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.accountNumber && Boolean(formik.errors.accountNumber)}
                        helperText={formik.touched.accountNumber && formik.errors.accountNumber} />

                </Grid2>
                <Grid2 size={{ xs: 12 }}>
                    <TextField
                        fullWidth
                        name="bankDetails.routingNumber"
                        label="Routing Number"
                        value={formik.values.bankDetails.routingNumber}
                        onChange={formik.handleChange}
                        error={formik.touched.routingNumber && Boolean(formik.errors.routingNumber)}
                        helperText={formik.touched.routingNumber && formik.errors.routingNumber} />

                </Grid2>
            </Grid2>
        </div>
    );
};

export default BecomeSellerStep3;