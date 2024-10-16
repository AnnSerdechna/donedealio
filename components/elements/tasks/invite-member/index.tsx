import { FC } from 'react';
import { Flex, Tag, Avatar, Input, Button } from 'antd';
import { UserAddOutlined, SearchOutlined } from '@ant-design/icons'

import { Text } from '@/components/ui';

export const InviteMember: FC = () => {
  return (
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
          {' '}{'Anna Serdechna'}
        </Tag>
      </Flex>

      <Input
        placeholder={'Search names, roles or teams'}
        size={'large'}
        prefix={<SearchOutlined style={{ fontSize: 20 }} />}
      />

      <Text>Suggested people</Text>

      <Button
        icon={<UserAddOutlined />}
        type={'text'}
        size={'large'}
        style={{ width: '100%' }}
      >
        Invite a new member by email
      </Button>
    </Flex>
  )
}