import { AddPhotoAlternate, Close } from "@mui/icons-material";
import { CircularProgress, Grid2, IconButton, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";


const AddProduct = () => {
    const[uploadImage, setUploadImage] = useState(false)

    const formik = useFormik({
        initialValues:{
            title:"",
            description:"",
            price:"",
            oldPrice:"",
            reSellingPrice:"",
            quantity:"",
            color:"",
            size:"",
            sku:"",
            whatsApp:"",
            shopName:"",
            facebookURL:"",
            images:['https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752337985/profile/zoe6nevgkroxp0peofvf.jpg'],
            category:"",
            category2:"",
            category3:"",            
        },
        onSubmit:(value) =>{
            console.log(value);
            
        }
    });
    const handleChangeImage = () =>{
        console.log("handle image change");
        
    };
    const handleRemoveImage = () =>{
        console.log("remove image");
        
    }
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Grid2 container spacing={2}>
                    <Grid2 className="flex flex-wrap gap-2" size={{xs:12}}>
                        <input 
                        type="file" 
                        accept="image/*" 
                        id="fileInput"
                         style={{display:"none"}} 
                         onChange={handleChangeImage}/>
                         <label htmlFor="fileInput" className="relative">
                                <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md"><AddPhotoAlternate className="text-gray-700"/></span>
                                {
                                    uploadImage && <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                                        <CircularProgress/>
                                    </div>
                                }
                         </label>
                         <div className="flex flex-wrap gap-2">
                                {
                                    formik.values.images?.map((item, index)=> 
                                        <div className="relative" key={index}>
                                                <img src={item} alt="upload image" className="w-24 h-24 object-cover"/>
                                                <IconButton
                                                onClick={()=>handleRemoveImage(index)}
                                                 size="small" color="error" 
                                                sx={{position:"absolute", top:0, right:0, outline:"none"}}
                                                >
                                                    <Close sx={{fontSize:"1rem"}}/>
                                                </IconButton>
                                        </div>
                                    )
                                }
                         </div>
                    </Grid2>
                    <Grid2 size={{xs:12}}>
                                <TextField fullWidth id="title" name="title" label="Title" 
                                value={formik.values.title} onChange={formik.handleChange} required/>
                    </Grid2>
                    <Grid2 size={{xs:12}}>
                                <TextField fullWidth id="description" name="description" label="description" 
                                value={formik.values.description} onChange={formik.handleChange} required/>
                    </Grid2>
                    <Grid2 size={{xs: 12, sm: 6, lg: 3}}>
                                <TextField fullWidth id="price" name="price" label="Price" 
                                value={formik.values.price} onChange={formik.handleChange} required/>
                    </Grid2>
                    <Grid2 size={{xs: 12, sm: 6, lg: 3}}>
                                <TextField fullWidth id="oldPrice" name="oldPrice" label="old Price" 
                                value={formik.values.oldPrice} onChange={formik.handleChange} />
                    </Grid2>
                    <Grid2 size={{xs: 12, sm: 6, lg: 3}}>
                                <TextField fullWidth id="reSellingPrice" name="reSellingPrice" label="Reselling Price" 
                                value={formik.values.reSellingPrice} onChange={formik.handleChange} />
                    </Grid2>
                    <Grid2 size={{xs: 12, sm: 6, lg: 3}}>
                                <TextField fullWidth id="quantity" name="quantity" label="Quantity" 
                                value={formik.values.quantity} onChange={formik.handleChange} required/>
                    </Grid2>
                    <Grid2 size={{xs: 12, sm: 6, lg: 3}}>
                                <TextField fullWidth id="sku" name="sku" label="sku" 
                                value={formik.values.sku} onChange={formik.handleChange} />
                    </Grid2>
                    <Grid2 size={{xs: 12, sm: 6, lg: 3}}>
                                <TextField fullWidth id="whatsApp" name="whatsApp" label="WhatsApp" 
                                value={formik.values.whatsApp} onChange={formik.handleChange} required/>
                    </Grid2>
                    <Grid2 size={{xs: 12, sm: 6, lg: 3}}>
                                <TextField fullWidth id="shopName" name="shopName" label="ShopName" 
                                value={formik.values.shopName} onChange={formik.handleChange} />
                    </Grid2>
                    <Grid2 size={{xs: 12, sm: 6, lg: 3}}>
                                <TextField fullWidth id="facebookURL" name="facebookURL" label="facebookURL" 
                                value={formik.values.facebookURL} onChange={formik.handleChange} />
                    </Grid2>
                </Grid2>
                    
            </form>
        </div>
    );
};

export default AddProduct;