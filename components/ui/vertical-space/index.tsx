import { Space, SpaceProps } from 'antd';
import { FC } from 'react';

type VSpaceProps = SpaceProps & { width?: number | string }

export const VSpace: FC<VSpaceProps> = ({ size = 'large', width, children  }) => (
  <Space 
    direction={'vertical'} 
    size={size} 
    style={{ width: width ?? '100%'}}
  >
    {children}
  </Space>
)