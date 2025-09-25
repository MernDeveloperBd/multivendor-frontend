import { Box, Button, Grid2, TextField } from "@mui/material";
import { useFormik } from "formik";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import type { Dayjs } from "dayjs";

interface CouponFromValues {
            code: string,
            discountPercentage: number,
            validityStartDate: Dayjs | null,
            validityEndDate: Dayjs | null,
            minimumOrderValue: number,
        }

const CouponForm = () => {
    const formik = useFormik<CouponFromValues>({
        initialValues: {
            code: "",
            discountPercentage: 0,
            validityStartDate: null,
            validityEndDate: null,
            minimumOrderValue: 0,
        },
        onSubmit: (values) => {
            console.log(values);

        }
    })
    return (
        <div className="max-w-3xl">
            <Box sx={{ mt: 5 }} component={"form"} onSubmit={formik.handleSubmit}>
                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, sm: 6 }}>
                        <TextField
                            fullWidth
                            id="code"
                            name="code"
                            label="code"
                            value={formik.values.code}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.code && Boolean(formik.errors.code)}
                            helperText={formik.touched.code && formik.errors.code} />
                    </Grid2>
                    {/*  */}
                    <Grid2 size={{ xs: 12, sm: 6 }}>
                        <TextField
                            fullWidth
                             type="number"
                            id="discountPercentage"
                            name="discountPercentage"
                            label="discountPercentage"
                            value={formik.values.discountPercentage}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.discountPercentage && Boolean(formik.errors.discountPercentage)}
                            helperText={formik.touched.discountPercentage && formik.errors.discountPercentage} />
                    </Grid2>
                    {/*  */}
                    <Grid2 size={{ xs: 12, sm: 6 }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>                          
                                <DatePicker 
                                // value={formik.values.validityStartDate}
                                onChange={(value)=>formik.setFieldValue("validityStartDate",value)}
                                sx={{width:"100%"}} 
                                label="Validity Start Date" />
                           
                        </LocalizationProvider>
                    </Grid2>
                    {/*  */}
                    <Grid2 size={{ xs: 12, sm: 6 }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>                          
                                <DatePicker 
                                // value={formik.values.validityEndDate}
                                onChange={(value)=>formik.setFieldValue("validityEndDate",value)}
                                sx={{width:"100%"}} 
                                label="Validity Start Date" />
                           
                        </LocalizationProvider>
                    </Grid2>
                    {/*  */}
                    <Grid2 size={{ xs: 12, sm: 6 }}>
                        <TextField
                            fullWidth
                            type="number"
                            id="minimumOrderValue"
                            name="minimumOrderValue"
                            label="minimumOrderValue"
                            value={formik.values.minimumOrderValue}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.minimumOrderValue && Boolean(formik.errors.minimumOrderValue)}
                            helperText={formik.touched.minimumOrderValue && formik.errors.minimumOrderValue} />
                    </Grid2>
                    <Grid2 size={{ xs: 12 }}>
                        <Button sx={{py:"12px"}} type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                    </Grid2>
                </Grid2>
            </Box>
        </div>
    );
};

export default CouponForm;