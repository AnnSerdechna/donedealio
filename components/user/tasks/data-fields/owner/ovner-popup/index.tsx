'use client';

import { FC, Fragment, useState } from 'react';
import { Flex, Tag, Avatar, Input, Modal } from 'antd';
import { UserAddOutlined, SearchOutlined } from '@ant-design/icons'

import { Button, Text } from '@/components/ui';
import { InviteMemberForm } from '../../../forms/invite-member';
import { useCurrentUser } from '@/hooks/useCurrentUser';

export const OwnerPopup: FC = () => {
  const user = useCurrentUser();
  const [openInvite, setOpenInvite] = useState(false);

  const handleOpenInvite = () => setOpenInvite(true);
  const handleCloseInvite = () => setOpenInvite(false);

  return (
    <Fragment>
      <Flex gap={16} style={{ width: '100%' }} vertical>
        <Flex wrap gap="small">
          <Tag
            icon={<Avatar size={24} icon={<UserAddOutlined />} />}
            color="#bbb"
            style={{ borderRadius: '99px', margin: 0 }}
            closable
            bordered
            onClose={() => { }}
          >
            {' '}{user.name}
          </Tag>
        </Flex>

        <Input
          placeholder={'Search names, roles or teams'}
          size={'large'}
          prefix={<SearchOutlined style={{ fontSize: 20 }} />}
        />

        <Text>Suggested people</Text>

        <Button
          text={'Invite a new member by email'}
          icon={<UserAddOutlined />}
          type={'text'}
          size={'large'}
          onClick={handleOpenInvite}
        />
      </Flex>

      <Modal 
        title={'Invite member'}
        open={openInvite}
        onCancel={handleCloseInvite}
      >
        <InviteMemberForm />
      </Modal>
    </Fragment>
  )
}