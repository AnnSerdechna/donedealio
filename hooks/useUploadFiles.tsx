import { App, UploadFile, Upload } from 'antd';
import { RcFile, UploadProps } from 'antd/es/upload';
import { useState } from 'react';

import { uploadFile, removeFile } from '@/actions/upload';
import { useCurrentUser } from '@/hooks/useCurrentUser';

type UploadedFileProps = {
  url: string;
  id: string;
};

export const useUploadFile = () => {
  const { message } = App.useApp();
  const user = useCurrentUser();

  const defaultFile = user?.image
    ? [
        {
          uid: user?.imageId || '',
          size: 100,
          name: user?.name || '',
          url: user.image, 
        },
      ]
    : [];
  
  const existedFile = user?.image ? { url: user.image, id: user.imageId } : null

  const [previewFileList, setPreviewFileList] = useState<UploadFile[]>(defaultFile);
  const [fileList, setFileList] = useState<RcFile[]>([]);
  const [uploadedFile, setUploadedFile] = useState<UploadedFileProps | null>(existedFile);

  const handleBeforeUpload = (file: RcFile) => {
    const isLt1MB = file.size / 1024 / 1024 < 1;
    
    if (!isLt1MB) {
      message.error('File must be smaller than 1MB!');
      return Upload.LIST_IGNORE;
    }

    const fileUrl = URL.createObjectURL(file);

    setPreviewFileList([{...file, url: fileUrl}]);
    setFileList([file]);

    return false;
  };

  const handleUploadFile = async () => {
    if (!fileList.length) return null;
    const file = fileList[0];

    const reader = new FileReader();

    return new Promise<UploadedFileProps>((resolve, reject) => {
      reader.onloadend = async () => {
        try {
          if (uploadedFile) {
            await removeFile(uploadedFile.id, uploadedFile.url, 'image');
          }

          const base64String = reader.result as string;
          const response = await uploadFile(base64String, 'image');

          setUploadedFile({ url: response.url, id: response.id });
          setPreviewFileList([{ uid: file.uid, url: response.url, name: file.name, size: file.size }]);

          resolve({ url: response.url, id: response.id });
        } catch (err) {
          message.error('Upload file failed!');
          reject(err);
        }
      };

      reader.readAsDataURL(file as any);
    });
  };

  const handleDeleteFile = async () => {
    if (uploadedFile) {
      try {
        await removeFile(uploadedFile.id, uploadedFile.url, 'image');
        setUploadedFile(null);
        setPreviewFileList([]);
        setFileList([]);
      } catch (error) {
        message.error('Error removing file.');
      }
    }
  };

  const uploadProps: UploadProps = {
    fileList: previewFileList, 
    maxCount: 1,
    listType: 'picture-card', 
    beforeUpload: handleBeforeUpload,
    onRemove: () => handleDeleteFile(),
  };

  return {
    uploadProps,
    uploadedFile,
    handleUploadFile,
    handleDeleteFile,
    setFileList,
  };
};
