import { FC } from 'react';
import { Popover, Avatar } from 'antd';
import { UserAddOutlined } from '@ant-design/icons'

import { OwnerPopup } from './ovner-popup';

export const OwnerField: FC = () => (
  <Popover
    overlayStyle={{ width: 400 }}
    overlayInnerStyle={{ padding: 24 }}
    content={<OwnerPopup />}
    trigger={'click'}
    placement={'bottom'}
  >
    <Avatar size={32} icon={<UserAddOutlined />} />
  </Popover>
)