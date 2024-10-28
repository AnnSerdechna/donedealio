
'use client';
import { useState } from 'react';
import { CldImage } from 'next-cloudinary';

import { uploadFile, uploadImage } from '@/actions/upload'; 

function ImageUploadPage() {
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Convert the file to a base64-encoded string
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = reader.result as string;

      // Call the server action to upload the image
      const imageUrl = await uploadImage(base64String);
      setUploadedImageUrl(imageUrl);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {uploadedImageUrl && (
        <div>
          <h3>Uploaded Image:</h3>
          <CldImage
            src={uploadedImageUrl}
            width="500"
            height="500"
            crop={{ type: 'auto', source: true }}
            alt="Uploaded"
          />
        </div>
      )}
    </div>
  );
}

function FileUploadPage() {
  const [uploadedFileUrl, setUploadedFileUrl] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const fileData = reader.result as string;

      // Call the server action to upload the file (PDF, doc, etc.)
      const fileUrl = await uploadFile(fileData);
      setUploadedFileUrl(fileUrl);
    };
    reader.readAsDataURL(selectedFile);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {uploadedFileUrl && (
        <div>
          <h3>Uploaded File:</h3>
          <a href={uploadedFileUrl} target="_blank" rel="noopener noreferrer">
            View Uploaded File
          </a>
        </div>
      )}
    </div>
  );
}

export default function UploadPage() {
  return (
    <div>
      <ImageUploadPage />
      <FileUploadPage />
    </div>
  );
}

