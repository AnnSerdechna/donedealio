import { App, UploadFile } from 'antd';
import { RcFile, UploadProps } from 'antd/es/upload';
import { useState } from 'react';

import { getFile, removeFile, uploadFile } from '@/actions/upload';
import { useCurrentUser } from './useCurrentUser';
import { UploadFileStatus } from 'antd/es/upload/interface';

type UploadedFileProps = {
  url: string, 
  id: string
} 

export const useUploadFile = () => {
  const { message } = App.useApp();
  const user = useCurrentUser()

  const defaultFile = user?.image ? [
    {
      uid: '',
      size: 100,
      fileName: user?.name,
      name: user?.name,
      url: user.image
    }
  ] : [];

  const [fileList, setFileList] = useState<UploadFile[]>(defaultFile);
  const [uploadedFile, setUploadedFile] = useState<UploadedFileProps | null>(user?.image ? { url: user?.image, id: user?.imageId } : null)
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFileProps[]>(
    user?.image 
      ? [{url: user?.image, id: user?.imageId}] 
      : []
  );

  console.log(uploadedFiles, 'zfILES');
  
  const handleUploadFile = async (file: RcFile) => {
    try {
      if (!file) return;

      const reader = new FileReader();

      reader.onloadend = async () => {
        const base64String = reader.result as string;

        const response = await uploadFile(base64String, 'image');

        setUploadedFile({ url: response.url, id: response.id });
        setUploadedFiles(prev => [...prev, { url: response.url, id: response.id }])
      };

      setFileList([file])
      reader.readAsDataURL(file);
    } catch (err) {
      message.error('Upload file failed!');
    }
  };

  console.log(uploadedFile, 'uploadedFile');
  

  const handleDeleteFile = async () => {
    try {
      if (uploadedFile) {
        setUploadedFiles(prev => prev.filter(file => file.id !== uploadedFile.id))     
      }
    } catch (error) {
      message.error('Delete file error: ' + error);
    }
  };

  const handleDeleteAllFiles = async () => {
    try {
      if (uploadedFile) {
        const files: UploadedFileProps[] = uploadedFiles.length > 1 ? uploadedFiles.reverse().slice(1) : uploadedFiles;

        files.forEach(async (item) => {
          await removeFile(item.id, item.url, 'image')
        })
      }
    } catch (error) {
      message.error('Delete file error: ' + error);
    }
  };

  const uploadProps: UploadProps = {
    fileList,
    maxCount: 1,
    listType: 'picture-card',
    beforeUpload: handleUploadFile,
    onChange: ({ fileList: newFileList }) => setFileList(newFileList),
    onRemove: () => handleDeleteFile(),
  };

  return { uploadProps, uploadedFile, uploadedFiles, setUploadedFiles, setUploadedFile, handleDeleteAllFiles }
}