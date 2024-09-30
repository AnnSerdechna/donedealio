import { Card, Dropdown, MenuProps } from 'antd';
import { FC } from 'react';
import { DeleteOutlined, EditOutlined, MoreOutlined } from '@ant-design/icons';

import { Button, Text } from '@/components/ui';

const items: MenuProps['items'] = [
  {
    key: '1',
    icon: <EditOutlined />,
    label: 'Edit workspace'
  },
  {
    key: '2',
    label: 'Delete workspace',
    icon: <DeleteOutlined />,
  },
];

export const WorkspaceCard: FC = () => {
  return (
    <Card 
      title={'Workspace name'} 
      extra={(
        <Dropdown 
          menu={{ items }}
          trigger={['click']}
        >
          <Button size={'small'} type={'link'} icon={<MoreOutlined />} />
        </Dropdown>
      )} 
      style={{ width: 300 }}
    >
      <Text>Workspace description</Text>
    </Card>
  )
}