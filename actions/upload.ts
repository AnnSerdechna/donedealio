'use server';

import cloudinary from 'cloudinary';

cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

export async function uploadImage(image: string) {
  try {
    const response = await cloudinary.v2.uploader.upload(image, {
      upload_preset: 'donedealio',
    });
    return response.secure_url; 
  } catch (error) {
    console.error('Error uploading image:', error);
    throw new Error('Image upload failed');
  }
};

export async function uploadFile(file: string) {
  try {
    const response = await cloudinary.v2.uploader.upload(file, {
      resource_type: 'raw', 
      upload_preset: 'donedealio', 
    });

    // response.public_id 
    return response.secure_url; 
  } catch (error) {
    console.error('Error uploading file:', error);
    throw new Error('File upload failed');
  }
};
