import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";


const SellerLogin = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            otp: ""
        },
        onSubmit: (values) => {
            console.log("vaues", values);

        }
    })


    return (
        <div>
            <p className="text-2xl font-bold text-center text-teal-600 pb-5">Seller Login</p>

            <form onSubmit={formik.handleSubmit} className="space-y-4">
                <div>
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email} />
                </div>
                <div>
                    <TextField
                        fullWidth
                        id="otp"
                        name="otp"
                        label="otp"
                        value={formik.values.otp}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.otp && Boolean(formik.errors.otp)}
                        helperText={formik.touched.otp && formik.errors.otp} />
                </div>
                <div>
                    <Button  type="submit" sx={{py: "12px"}} variant="contained" fullWidth>Login</Button>
                </div>
            </form>
        </div>
    );
};

export default SellerLogin;