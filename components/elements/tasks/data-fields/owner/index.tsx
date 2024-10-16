import { FC } from 'react';
import { Popover, Avatar } from 'antd';
import { UserAddOutlined } from '@ant-design/icons'

import { InviteMember } from '../../invite-member';

export const OwnerField: FC = () => (
  <Popover
    overlayStyle={{ width: 400 }}
    overlayInnerStyle={{ padding: 24 }}
    content={<InviteMember />}
    trigger={'click'}
    placement={'bottom'}
  >
    <Avatar size={32} icon={<UserAddOutlined />} />
  </Popover>
)