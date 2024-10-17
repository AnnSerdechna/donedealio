import { Alert, AlertProps } from 'antd';
import { FC } from 'react';

import { MessageProps } from '@/types';

type AlertMessageProps = AlertProps & {
  data?: MessageProps | null
}
export const AlertMessage: FC<AlertMessageProps> = ({ data, ...props }) => {

  if (!data) return null;

  return <Alert type={data?.status} message={data?.content}  showIcon />
}