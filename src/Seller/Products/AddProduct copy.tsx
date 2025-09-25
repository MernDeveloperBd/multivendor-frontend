import { AddPhotoAlternate, Close } from "@mui/icons-material";
import { Box, CircularProgress, Grid2, IconButton, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import { useFormik } from "formik";
import { useState } from "react";
import { womenLabelTwo } from "../../data/category/lavelTwo/womenLabelTwo";
import { menLabelTwo } from "../../data/category/lavelTwo/menLabelTwo";
import { womenLabelThree } from "../../data/category/labelThree/womenLabelThree";
import { menLabelThree } from "../../data/category/labelThree/menLabelThree";
import { mainCategory } from "../../data/category/mainCategory";

// Placeholder data for categories and sizes

// Create mapping between main category IDs and category keys
const categoryKeyMapping = {
    women_fashion: "women",
    men_fashion: "men",
    child_fashion: "child"
};

const categoryThreeKeyMapping = {
    women_fashion: "women",
    men_fashion: "men"
    // child_fashion is not included because we don't have data for it
};

const categoryTwo = {
    women: womenLabelTwo,
    men: menLabelTwo,
    child: [] // Empty array for child fashion
};

const categoryThree = {
    women: womenLabelThree,
    men: menLabelThree
    // No child data
};

const sizes = [
    { name: "XS" },
    { name: "S" },
    { name: "M" },
    { name: "L" },
    { name: "XL" },
    { name: "XXL" }
];

// Colors: name only used as value, hex used for preview
const colors = [
    { name: "Pink" },
    { name: "Red" },
    { name: "Maroon" },
    { name: "Wine" },
    { name: "Magenta" },
    { name: "Purple" },
    { name: "Lavender" }
];

const AddProduct = () => {
    const [uploadImage, setUploadImage] = useState(false);

    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            price: "",
            oldPrice: "",
            reSellingPrice: "",
            quantity: "",
            color: "", // store color NAME here (e.g., "Red")
            size: "",
            sku: "",
            whatsApp: "",
            shopName: "",
            facebookURL: "",
            images: [], // Start with empty array
            category: "",
            category2: "",
            category3: "",
        },
        onSubmit: (values) => {
            console.log("Form submitted:", values);
            // Add your form submission logic here
        }
    });

    const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setUploadImage(true);
            const reader = new FileReader();
            reader.onload = (event) => {
                const newImage = event.target?.result as string;
                formik.setFieldValue('images', [...formik.values.images, newImage]);
                setUploadImage(false);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = (index: number) => {
        const newImages = [...formik.values.images];
        newImages.splice(index, 1);
        formik.setFieldValue('images', newImages);
    };

    const getColorByName = (name: string) =>
        colors.find((c) => c.name === name);

    return (
        <div className="p-1">
            <form onSubmit={formik.handleSubmit}>
                <Grid2 container spacing={2}>
                    {/* Image Upload Section */}
                    <Grid2 className="flex flex-wrap gap-2" size={{ xs: 12 }}>
                        <input
                            type="file"
                            accept="image/*"
                            id="fileInput"
                            style={{ display: "none" }}
                            onChange={handleChangeImage} />
                        <label htmlFor="fileInput" className="relative">
                            <div className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-dashed border-gray-300">
                                <AddPhotoAlternate className="text-gray-700 text-3xl" />
                            </div>
                            {uploadImage && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-md">
                                    <CircularProgress color="inherit" />
                                </div>
                            )}
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {formik.values.images?.map((item, index) => (
                                <div className="relative" key={index}>
                                    <img
                                        src={item}
                                        alt="upload image"
                                        className="w-24 h-24 object-cover rounded-md border"
                                    />
                                    <IconButton
                                        onClick={() => handleRemoveImage(index)}
                                        size="small"
                                        color="error"
                                        sx={{ position: "absolute", top: 4, right: 4 }}
                                    >
                                        <Close sx={{ fontSize: "1rem" }} />
                                    </IconButton>
                                </div>
                            ))}
                        </div>
                    </Grid2>

                    {/* Title Field */}
                    <Grid2 size={{ xs: 12 }}>
                        <TextField
                            fullWidth
                            id="title"
                            name="title"
                            label="Title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            required
                        />
                    </Grid2>

                    {/* Description Field */}
                    <Grid2 size={{ xs: 12 }}>
                        <TextField
                            fullWidth
                            id="description"
                            name="description"
                            label="Description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            required
                            multiline
                            rows={4}
                        />
                    </Grid2>

                    {/* Price Fields */}
                    <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
                        <TextField
                            fullWidth
                            id="price"
                            name="price"
                            label="Price"
                            value={formik.values.price}
                            onChange={formik.handleChange}
                            required
                            type="number"
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
                        <TextField
                            fullWidth
                            id="oldPrice"
                            name="oldPrice"
                            label="Old Price"
                            value={formik.values.oldPrice}
                            onChange={formik.handleChange}
                            type="number"
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
                        <TextField
                            fullWidth
                            id="reSellingPrice"
                            name="reSellingPrice"
                            label="Reselling Price"
                            value={formik.values.reSellingPrice}
                            onChange={formik.handleChange}
                            type="number"
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
                        <TextField
                            fullWidth
                            id="quantity"
                            name="quantity"
                            label="Quantity"
                            value={formik.values.quantity}
                            onChange={formik.handleChange}
                            required
                            type="number"
                        />
                    </Grid2>

                    {/* Additional Info Fields */}
                    <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
                        <TextField
                            fullWidth
                            id="sku"
                            name="sku"
                            label="SKU"
                            value={formik.values.sku}
                            onChange={formik.handleChange}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
                        <TextField
                            fullWidth
                            id="whatsApp"
                            name="whatsApp"
                            label="WhatsApp"
                            value={formik.values.whatsApp}
                            onChange={formik.handleChange}
                            required
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
                        <TextField
                            fullWidth
                            id="shopName"
                            name="shopName"
                            label="Shop Name"
                            value={formik.values.shopName}
                            onChange={formik.handleChange}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
                        <TextField
                            fullWidth
                            id="facebookURL"
                            name="facebookURL"
                            label="Facebook URL"
                            value={formik.values.facebookURL}
                            onChange={formik.handleChange}
                        />
                    </Grid2>

                    {/* Category Fields */}
                    <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
                        <FormControl fullWidth>
                            <InputLabel id="category-label">Category</InputLabel>
                            <Select
                                labelId="category-label"
                                id="category"
                                name="category"
                                value={formik.values.category}
                                label="Category"
                                onChange={(e) => {
                                    formik.setFieldValue('category', e.target.value);
                                    formik.setFieldValue('category2', '');
                                    formik.setFieldValue('category3', '');
                                }}
                            >
                                <MenuItem value="">None</MenuItem>
                                {mainCategory.map((item, index) => (
                                    <MenuItem key={index} value={item.categoryId}>
                                        {item.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
                        <FormControl fullWidth>
                            <InputLabel id="category2-label">Second Category</InputLabel>
                            <Select
                                labelId="category2-label"
                                id="category2"
                                name="category2"
                                value={formik.values.category2}
                                label="Second Category"
                                onChange={(e) => {
                                    formik.setFieldValue('category2', e.target.value);
                                    formik.setFieldValue('category3', '');
                                }}
                            >
                                <MenuItem value="">None</MenuItem>
                                {formik.values.category && (
                                    (() => {
                                        const key = categoryKeyMapping[formik.values.category];
                                        const options = categoryTwo[key] || [];
                                        return options.map((item, index) => (
                                            <MenuItem key={index} value={item.categoryId}>
                                                {item.name}
                                            </MenuItem>
                                        ));
                                    })()
                                )}
                            </Select>
                        </FormControl>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
                        <FormControl fullWidth>
                            <InputLabel id="category3-label">Third Category</InputLabel>
                            <Select
                                labelId="category3-label"
                                id="category3"
                                name="category3"
                                value={formik.values.category3}
                                label="Third Category"
                                onChange={formik.handleChange}
                            >
                                <MenuItem value="">None</MenuItem>
                                {formik.values.category2 && (
                                    (() => {
                                        const mainCategoryKey = categoryThreeKeyMapping[formik.values.category];
                                        let options = [];
                                        
                                        if (mainCategoryKey) {
                                            const allThirdCategories = categoryThree[mainCategoryKey] || [];
                                            options = allThirdCategories.filter(item => 
                                                item.parentCategoryId === formik.values.category2
                                            );
                                        }
                                        
                                        return options.map((item, index) => (
                                            <MenuItem key={index} value={item.categoryId}>
                                                {item.name}
                                            </MenuItem>
                                        ));
                                    })()
                                )}
                            </Select>
                        </FormControl>
                    </Grid2>

                    {/* Size Field */}
                    <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
                        <FormControl fullWidth>
                            <InputLabel id="size-label">Size</InputLabel>
                            <Select
                                labelId="size-label"
                                id="size"
                                name="size"
                                value={formik.values.size}
                                label="Size"
                                onChange={formik.handleChange}
                            >
                                <MenuItem value="">None</MenuItem>
                                {sizes.map((item, index) => (
                                    <MenuItem key={index} value={item.name}>
                                        {item.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid2>

                    {/* Color Field with preview */}
                    <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
                        <FormControl fullWidth>
                            <InputLabel id="color-label">Color</InputLabel>
                            <Select
                                labelId="color-label"
                                id="color"
                                name="color"
                                value={formik.values.color}
                                label="Color"
                                onChange={(e) => formik.setFieldValue('color', e.target.value)}
                                renderValue={(selected) => {
                                    const colorObj = getColorByName(selected as string);
                                    if (!colorObj) return "None";
                                    return (
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                            <Box
                                                sx={{
                                                    width: 16,
                                                    height: 16,
                                                    borderRadius: "50%",
                                                    border: "1px solid rgba(0,0,0,0.2)"
                                                }}
                                            />
                                            {colorObj.name}
                                        </Box>
                                    );
                                }}
                            >
                                <MenuItem value="">None</MenuItem>
                                {colors.map((item, index) => (
                                    <MenuItem key={index} value={item.name}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                            <Box
                                                sx={{
                                                    width: 16,
                                                    height: 16,
                                                    borderRadius: "50%",
                                                    border: "1px solid rgba(0,0,0,0.2)"
                                                }}
                                            />
                                            {item.name}
                                        </Box>
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid2>
                </Grid2>

                {/* Submit Button */}
                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-300 cursor-pointer"
                    >
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;