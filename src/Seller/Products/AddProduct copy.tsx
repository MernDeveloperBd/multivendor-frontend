import { AddPhotoAlternate, Close } from "@mui/icons-material";
import { CircularProgress, Grid2, IconButton, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import { useFormik } from "formik";
import { useState } from "react";

// Placeholder data for categories and sizes
const categories = [
  { name: "Electronics" },
  { name: "Clothing" },
  { name: "Home & Kitchen" },
  { name: "Books" },
  { name: "Sports" }
];

const sizes = [
  { name: "XS" },
  { name: "S" },
  { name: "M" },
  { name: "L" },
  { name: "XL" },
  { name: "XXL" }
];

// Import the colors array from your data file
 const colors = [
  { name: "Pink", hex: "#FFC0CB" },
  { name: "Red", hex: "#FF0000" },
  { name: "Maroon", hex: "#800000" },
  { name: "Wine", hex: "#722F37" },
  { name: "Magenta", hex: "#FF00FF" },
  { name: "Purple", hex: "#800080" },
  { name: "Lavender", hex: "#E6E6FA" },
  { name: "Blue", hex: "#0000FF" },
  { name: "Navy Blue", hex: "#000080" },
  { name: "Sky Blue", hex: "#87CEEB" },
  { name: "Turquoise", hex: "#40E0D0" },
  { name: "Green", hex: "#008000" },
  { name: "Olive Green", hex: "#556B2F" },
  { name: "Teal", hex: "#008080" },
  { name: "Mustard Yellow", hex: "#FFDB58" },
  { name: "Golden", hex: "#FFD700" },
  { name: "Orange", hex: "#FFA500" },
  { name: "Brown", hex: "#A52A2A" },
  { name: "Cream", hex: "#FFFDD0" },
  { name: "Off White", hex: "#FAF9F6" }
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
            color: "",
            size: "",
            sku: "",
            whatsApp: "",
            shopName: "",
            facebookURL: "",
            images: ['https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752337985/profile/zoe6nevgkroxp0peofvf.jpg'],
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
                                onChange={formik.handleChange}
                            >
                                <MenuItem value="">None</MenuItem>
                                {categories.map((item, index) => (
                                    <MenuItem key={index} value={item.name}>
                                        {item.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
                        <FormControl fullWidth>
                            <InputLabel id="category2-label">Subcategory</InputLabel>
                            <Select
                                labelId="category2-label"
                                id="category2"
                                name="category2"
                                value={formik.values.category2}
                                label="Subcategory"
                                onChange={formik.handleChange}
                            >
                                <MenuItem value="">None</MenuItem>
                                {categories.map((item, index) => (
                                    <MenuItem key={index} value={item.name}>
                                        {item.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
                        <FormControl fullWidth>
                            <InputLabel id="category3-label">Child Category</InputLabel>
                            <Select
                                labelId="category3-label"
                                id="category3"
                                name="category3"
                                value={formik.values.category3}
                                label="Child Category"
                                onChange={formik.handleChange}
                            >
                                <MenuItem value="">None</MenuItem>
                                {categories.map((item, index) => (
                                    <MenuItem key={index} value={item.name}>
                                        {item.name}
                                    </MenuItem>
                                ))}
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

                    {/* Color Field */}
                    <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
                        <FormControl fullWidth>
                            <InputLabel id="color-label">Color</InputLabel>
                            <Select
                                labelId="color-label"
                                id="color"
                                name="color"
                                value={formik.values.color}
                                label="Color"
                                onChange={formik.handleChange}
                            >
                                <MenuItem value="">None</MenuItem>
                                {colors.map((item, index) => (
                                    <MenuItem key={index} value={item.name}>
                                        {item.name}
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