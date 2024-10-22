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
  } catch {
    throw new Error('File upload failed');
  }
};

export async function removeFile(publicId: string, fileUrl: string, resourceType: ResourceType) {
  try {
    await cloudinary.v2.uploader.destroy(
      publicId, 
      { resource_type: resourceType }
    );
  } catch {
    throw new Error('File remove failed');
  }
};
