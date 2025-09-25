import { Grid2, TextField } from "@mui/material";

const BecomeSellerStep2 = ({formik}:any) => {
    return (
        <div>
            <p className="text-xl font-bold text-center pb-9">Pickup Address</p>
           <Grid2 container spacing={2}>
            <Grid2 size={{xs:12}}>
                <TextField
                fullWidth                        
                        name="pickUpAddress.name"
                        label="Name"
                        value={formik.values.pickUpAddress.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name} />              

            </Grid2>
            <Grid2 size={{xs:6}}>
                <TextField
                fullWidth                        
                        name="pickUpAddress.mobile"
                        label="Mobile"
                        value={formik.values.pickUpAddress.mobile}
                        onChange={formik.handleChange}
                        error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                        helperText={formik.touched.mobile && formik.errors.mobile} />              

            </Grid2>
            <Grid2 size={{xs:6}}>
                <TextField
                fullWidth                        
                        name="pickUpAddress.pincode"
                        label="Pincode"
                        value={formik.values.pickUpAddress.pincode}
                        onChange={formik.handleChange}
                        error={formik.touched.pincode && Boolean(formik.errors.pincode)}
                        helperText={formik.touched.pincode && formik.errors.pincode} />              

            </Grid2>
            <Grid2 size={{xs:12}}>
                <TextField
                fullWidth                        
                        name="pickUpAddress.address"
                        label="Address(House no, road no, street)"
                        value={formik.values.pickUpAddress.address}
                        onChange={formik.handleChange}
                        error={formik.touched.address && Boolean(formik.errors.address)}
                        helperText={formik.touched.address && formik.errors.address} />              

            </Grid2>
              <Grid2 size={{xs:12}}>
                <TextField 
                fullWidth                        
                        name="pickUpAddress.locality"
                        label="locality"
                        value={formik.values.pickUpAddress.locality}
                        onChange={formik.handleChange}
                        error={formik.touched.locality && Boolean(formik.errors.locality)}
                        helperText={formik.touched.locality && formik.errors.locality} />              

            </Grid2>
            <Grid2 size={{xs:6}}>
                <TextField
                fullWidth                        
                        name="pickUpAddress.city"
                        label="city"
                        value={formik.values.pickUpAddress.city}
                        onChange={formik.handleChange}
                        error={formik.touched.city && Boolean(formik.errors.city)}
                        helperText={formik.touched.city && formik.errors.city} />              

            </Grid2>
            <Grid2 size={{xs:6}}>
                <TextField
                fullWidth                        
                        name="pickUpAddress.state"
                        label="state"
                        value={formik.values.pickUpAddress.state}
                        onChange={formik.handleChange}
                        error={formik.touched.state && Boolean(formik.errors.state)}
                        helperText={formik.touched.state && formik.errors.state} />              

            </Grid2>
          
             
           </Grid2>
        </div>
    );
};

export default BecomeSellerStep2;