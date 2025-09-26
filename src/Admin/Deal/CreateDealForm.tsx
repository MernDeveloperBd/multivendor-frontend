import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { womenLabelTwo } from "../../data/category/lavelTwo/womenLabelTwo";


const CreateDealForm = () => {

    const formik = useFormik({
        initialValues: {
            discount: 0,
            category: ""
        },
        onSubmit: (values) =>
            console.log(values)

    })
    return (
        <Box component={'form'}
            onSubmit={formik.handleSubmit}
            sx={{ Width: 600, margin: 'auto', padding: 3 }}
            className="space-y-6">
            <div>
                <Typography variant="h4" sx={{ textAlign: 'center' }}>
                    Create New Deal
                </Typography>
            </div>
            <div>
                <TextField
                    fullWidth
                    name="discount"
                    label="Discount"
                    value={formik.values.discount}
                    onChange={formik.handleChange}
                />
            </div>
            {/*  */}
            <div>
                <FormControl fullWidth required>
                    <InputLabel id="category-label">Category</InputLabel>
                    <Select
                        id="category"
                        labelId="category-label"
                        name="category"
                        value={formik.values.category}
                        onChange={formik.handleChange}
                        label="Category"
                    >
                        <MenuItem value="none">None</MenuItem>
                        {
                            womenLabelTwo.map((item, index) => (
                                <MenuItem key={index} value={item.categoryId}>{item.name}</MenuItem>
                            ))
                        }
                    </Select>

                </FormControl>
            </div>
<div>
    <Button type="submit" variant="contained" sx={{py:'11px'}} fullWidth>Create Deal</Button>
</div>
        </Box>
    );
};

export default CreateDealForm;