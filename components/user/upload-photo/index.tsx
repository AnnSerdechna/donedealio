'use client';

import React, { FC, useState } from 'react';
import { Upload } from 'antd';
import type { GetProp, UploadProps, UploadFile, FormInstance } from 'antd';
import ImgCrop from 'antd-img-crop';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

export const UploadPhoto: FC<UploadProps & { form: FormInstance }> = ({ form, ...props }) => {
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    form.setFieldValue('avatar', newFileList[0].thumbUrl);
  };

  

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as FileType);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <ImgCrop rotationSlider>
      <Upload
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        listType="picture-card"
        maxCount={1}
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
        {...props}
      >
        {'+ Upload'}
      </Upload>
    </ImgCrop>
  );
};