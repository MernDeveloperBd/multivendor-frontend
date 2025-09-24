import { Box, Button, Grid2, TextField } from "@mui/material";
import { useFormik } from 'formik';

const AddressForm = () => {
  const formik = useFormik({
      initialValues:{
        name:"",
        mobile:"",
        address:"",
        city:"",
        state:"",
        locality:""
      },
      onSubmit:(value)=>{
        console.log("form submitted", value);
        
      }
  })
  return (
    <Box sx={{ maxWidth: 600, mx: "auto" }}>
      <p className="text-xl font-bold text-center pb-3">Contact Details</p>
      <form onSubmit={formik.handleSubmit}>
        <Grid2 container spacing={3}>
          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth
              required
              name="name"
              label="Full Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            />          
          </Grid2>
        
         <Grid2 size={{ xs: 6 }}>
            <TextField
              fullWidth
              required
              name="mobile"
              label="Mobile"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            />          
          </Grid2>
           <Grid2 size={{ xs: 6 }}>
            <TextField
              fullWidth
              required
              name="pinCode"
              label="Pin Code"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            />          
          </Grid2>
           <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth
              required
              name="address"
              label="Address"
            value={formik.values.address}
            onChange={formik.handleChange}
            />          
          </Grid2>
            <Grid2 size={{ xs: 6 }}>
            <TextField
              fullWidth
              required
              name="locality"
              label="locality/Town"
            value={formik.values.locality}
            onChange={formik.handleChange}
            />          
          </Grid2>
            <Grid2 size={{ xs: 6 }}>
            <TextField
              fullWidth
              required
              name="city"
              label="City"
            value={formik.values.city}
            onChange={formik.handleChange}
            />          
          </Grid2>
           
           <Grid2 size={{ xs: 6 }}>
            <TextField
              fullWidth
              required
              name="state"
              label="state"
            value={formik.values.state}
            onChange={formik.handleChange}
            />          
          </Grid2>
         
          <Button type="submit" variant="contained" color="primary">
              Save Address
            </Button>
        </Grid2>
      </form>
    </Box>
  );
};

export default AddressForm;