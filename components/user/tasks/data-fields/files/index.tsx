'use client';

import { Dispatch, FC, SetStateAction, useState } from 'react';
import { Upload, Button, App } from 'antd';
import { FileAddOutlined } from '@ant-design/icons';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

import { removeFile, uploadFile } from '@/actions/upload';
import { File, useCreateFileMutation, useDeleteFileMutation } from '@/graphql/types';
import { VSpace } from '@/components/ui';
import { FileList } from '@/components/user/tasks/data-fields/files/file-list';

export type FilesUploadProps = {
  files: File[], 
  taskId: string, 
  refetch?: VoidFunction
  fileList?: UploadFile[]
  setFileList?: Dispatch<SetStateAction<UploadFile[]>>
};

export const FilesUpload: FC<FilesUploadProps> = ({ files, fileList, setFileList, taskId, refetch }) => {
  const { message } = App.useApp();
  const [deletedFileId, setDeletedFileId] = useState('')
  const [createFile, { loading: createLoading }] = useCreateFileMutation();
  const [deleteFile, { loading: deleteLoading }] = useDeleteFileMutation();

  const handleUploadFile = async (antFile: RcFile, fileList: RcFile[]) => {
    const isLt1MB = antFile?.size / 1024 / 1024 < 1;    

    if (!isLt1MB) {
      message.error('File must be smaller than 1MB!');
      return Upload.LIST_IGNORE;
    }

    if (!fileList.length) return null;
    const file: Blob = fileList[0];

    const reader = new FileReader();

    return new Promise<{ url: string, id: string }>((resolve, reject) => {
      reader.onloadend = async () => {
        try {
          const base64String = reader.result as string;
          const response = await uploadFile(base64String);

          if (!!taskId) {
            await createFile({
              variables: {
                data: {
                  task: { connect: { id: taskId } },
                  url: response.url,
                  name: antFile.name,
                  fileId: response.id
                }
              }
            })
          } else {
            if (setFileList) {
              setFileList((prev: any) => [...prev, {
                uid: response.id,
                url: response.url,
                name: antFile.name
              }])
            }
          }
      
          resolve({ url: response.url, id: response.id });

          if (!!refetch) {
            refetch();
          }
        } catch (error) {
          message.error('Upload file failed!');
          reject(error);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleDeleteFile = async (fileId: string, id?: number) => {
    try {
      setDeletedFileId(fileId);
      await removeFile(fileId);

      if (!!fileList && !!setFileList) {
        setFileList(prev => prev?.filter(item => item.uid !== fileId))
      } else {
        await deleteFile({ variables: { where: { id, fileId } } });
      }

      if (!!refetch) {
        refetch();
      }
    } catch {
      message.error('Error removing file.');
    } finally {
      setDeletedFileId('');
    }
  };

  const uploadProps: UploadProps = {
    maxCount: 5,
    multiple: true,
    showUploadList: false,
    beforeUpload: (file, fileList) => {
      handleUploadFile(file, fileList)
      return false;
    },
  };

  return (
    <VSpace size={2}>
      <Upload {...uploadProps}>
        <Button
          type={'link'}
          loading={createLoading}
          icon={<FileAddOutlined style={{ fontSize: 18, color: '#d9d9d9' }} />}
        />
      </Upload>

      <FileList
        files={!!fileList?.length ? fileList : files}
        deletedFileId={deletedFileId}
        deleteLoading={deleteLoading}
        handleDeleteFile={handleDeleteFile}
      />
    </VSpace>
  );
};

