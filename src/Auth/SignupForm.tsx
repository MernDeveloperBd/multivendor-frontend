import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";


const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            otp: ""
        },
        onSubmit: (values) => {
            console.log("vaues", values);

        }
    })


    return (
        <div>
            <p className="text-2xl font-bold text-center text-teal-600 pb-4">Sign Up</p>

            <form onSubmit={formik.handleSubmit} className="space-y-3">
              
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
                        label="Otp"
                        value={formik.values.otp}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.otp && Boolean(formik.errors.otp)}
                        helperText={formik.touched.otp && formik.errors.otp} />
                </div>
                  <div>
                    <TextField
                        fullWidth
                        id="fullName"
                        name="fullName"
                        label="Full Name"
                        value={formik.values.fullName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                        helperText={formik.touched.fullName && formik.errors.fullName} />
                </div>
                <div>
                    <Button  type="submit" sx={{py: "12px"}} variant="contained" fullWidth>Sign Up</Button>
                </div>
            </form>
        </div>
    );
};

export default SignupForm;