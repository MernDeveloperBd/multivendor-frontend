import { Grid2, TextField } from "@mui/material";


const BecomeSellerStep4 = ({formik}:any) => {
    return (
       <div className="space-y-3">
        <p className="text-xl font-bold text-center pb-2">Business Details</p>
            <Grid2 container spacing={2}>
                <Grid2 size={{ xs: 12 }}>
                    <TextField
                        fullWidth
                        name="businessDetails.businessName"
                        label="Business Name"
                        value={formik.values.businessDetails.businessName}
                        onChange={formik.handleChange}
                        error={formik.touched.businessName && Boolean(formik.errors.businessName)}
                        helperText={formik.touched.businessName && formik.errors.businessName} />
                </Grid2>
                <Grid2 size={{ xs: 12 }}>
                    <TextField
                        fullWidth
                        name="businessDetails.businessEmail"
                        label="business Email"
                        value={formik.values.businessDetails.businessEmail}
                        onChange={formik.handleChange}
                        error={formik.touched.businessEmail && Boolean(formik.errors.businessEmail)}
                        helperText={formik.touched.businessEmail && formik.errors.businessEmail} />
                </Grid2>
                <Grid2 size={{ xs: 12 }}>
                    <TextField
                        fullWidth
                        name="businessDetails.password"
                        label="password"
                        value={formik.values.businessDetails.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password} />
                </Grid2>
                <Grid2 size={{ xs: 6 }}>
                    <TextField
                        fullWidth
                        name="businessDetails.businessMobile"
                        label="businessMobile"
                        value={formik.values.businessDetails.businessMobile}
                        onChange={formik.handleChange}
                        error={formik.touched.businessMobile && Boolean(formik.errors.businessMobile)}
                        helperText={formik.touched.businessMobile && formik.errors.businessMobile} />
                </Grid2>
                <Grid2 size={{ xs: 6 }}>
                    <TextField
                        fullWidth
                        name="businessDetails.logo"
                        label="logo"
                        value={formik.values.businessDetails.logo}
                        onChange={formik.handleChange}
                        error={formik.touched.logo && Boolean(formik.errors.logo)}
                        helperText={formik.touched.logo && formik.errors.logo} />
                </Grid2>
                <Grid2 size={{ xs: 12 }}>
                    <TextField
                        fullWidth
                        name="businessDetails.banner"
                        label="banner"
                        value={formik.values.businessDetails.banner}
                        onChange={formik.handleChange}
                        error={formik.touched.banner && Boolean(formik.errors.banner)}
                        helperText={formik.touched.banner && formik.errors.banner} />
                </Grid2>
                <Grid2 size={{ xs: 12 }}>
                    <TextField
                        fullWidth
                        name="businessDetails.businessAddress"
                        label="businessAddress"
                        value={formik.values.businessDetails.businessAddress}
                        onChange={formik.handleChange}
                        error={formik.touched.businessAddress && Boolean(formik.errors.businessAddress)}
                        helperText={formik.touched.businessAddress && formik.errors.businessAddress} />
                </Grid2>
                <Grid2 size={{ xs: 12 }}>
                    <TextField
                        fullWidth
                        name="businessDetails.businessFbPage"
                        label="businessFbPage"
                        value={formik.values.businessDetails.businessFbPage}
                        onChange={formik.handleChange}
                        error={formik.touched.businessFbPage && Boolean(formik.errors.businessFbPage)}
                        helperText={formik.touched.businessFbPage && formik.errors.businessFbPage} />
                </Grid2>
                


            </Grid2>
        </div>
    );
};

export default BecomeSellerStep4;