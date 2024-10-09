import { Typography } from 'antd';
import { FC, ReactNode } from 'react';
import { EditOutlined } from '@ant-design/icons';

type EditableFieldProps = {
  value: string
  icon?: ReactNode
  tooltip?: string
  onChange: (newValue: string) => void
};

export const EditableText: FC<EditableFieldProps> = ({ value, onChange, tooltip, icon }) => (
  <Typography.Paragraph
    editable={{
      onChange,
      maxLength: 50,
      icon: !!icon ? icon : <EditOutlined />,
      tooltip: !!tooltip ? tooltip : false
    }}
    ellipsis
  >
    {value}
  </Typography.Paragraph>
)