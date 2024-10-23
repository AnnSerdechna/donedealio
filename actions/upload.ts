'use server';

import cloudinary from 'cloudinary';

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


type ResponseProps = {
  url: string
  id: string
  format?: string
  name?: string
  size?: number
}

export async function uploadFile(
  file: string, 
): Promise<ResponseProps> {
  try {
    const response = await cloudinary.v2.uploader.upload(
      file, 
      {
        resource_type: 'image', 
        upload_preset: 'donedealio', 
      }
    );

    return { url: response.secure_url, id: response.public_id, name: response.signature }; 
  } catch {
    throw new Error('File upload failed');
  }
};

export async function removeFile(publicId: string) {
  try {
    await cloudinary.v2.uploader.destroy(
      publicId, 
      { resource_type: 'image' }
    );
  } catch {
    throw new Error('File remove failed');
  }
};
