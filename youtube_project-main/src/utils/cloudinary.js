import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINIRY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    
    // Upload an image
     try{
        if(!localFilePath) return null;
        const uploadResult = await cloudinary.uploader
       .upload(localFilePath, {
            //    public_id: 'shoes',
               resource_type: 'auto'
           }
        )
        console.log(uploadResult);
        return uploadResult;
    } catch(error) {
        //    console.log(error);
           fs.unlinkSync(localFilePath); //remove the locally saved temporary file
           return null;
       };
    
export {uploadImageToCloudinary};