import { Typography } from 'antd';
import { FC } from 'react';

type EditableFieldProps = {
  value: string
  onChange: (newValue: string) => void
};

export const EditableText: FC<EditableFieldProps> = ({ value, onChange }) => (
  <Typography.Paragraph
    editable={{
      onChange,
      maxLength: 50,
    }}
  >
    {value}
  </Typography.Paragraph>
)