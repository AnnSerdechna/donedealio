'use server';

import cloudinary from 'cloudinary';

cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

type ResourceType = 'image' | 'raw';

type ResponseProps = {
  url: string
  id: string
}

export async function uploadFile(
  file: string, 
  resourceType: ResourceType
): Promise<ResponseProps> {
  try {
    const response = await cloudinary.v2.uploader.upload(
      file, 
      {
        resource_type: resourceType, 
        upload_preset: 'donedealio', 
      }
    );

    return { url: response.secure_url, id: response.public_id }; 
  } catch (error) {
    console.error('Error uploading file:', error);
    throw new Error('File upload failed');
  }
};

export async function removeFile(publicId: string, fileUrl: string, resourceType: ResourceType) {
  try {
    await cloudinary.v2.uploader.destroy(
      publicId, 
      { resource_type: resourceType }
    );

    console.log('File was remove successfully')
  } catch (error) {
    console.error('Error remove file:', error);
    throw new Error('File remove failed');
  }
};

export async function getFile(publicId: string) {
  try {
    // Generate the file URL or retrieve file info using Cloudinary API
    const fileUrl = cloudinary.v2.url(publicId, {
      secure: true, // ensures the URL is https
    });

    // Or if you want detailed info about the asset
    const fileInfo = await cloudinary.v2.api.resource(publicId);

    return { fileUrl, fileInfo };
  } catch (error) {
    console.error('Error fetching file from Cloudinary:', error);
    return null;
  }
}