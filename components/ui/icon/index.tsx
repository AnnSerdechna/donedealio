import { FC, ReactNode } from 'react';

type StyledIconProps = {
  icon: ReactNode;
  size?: string | number;
  color?: string;
}

export const Icon: FC<StyledIconProps> = ({ icon, size = '1.2em', color = '' }) => {
  return (
    <span style={{ fontSize: size, color: !!color ? color : '#444' }}>
      {icon}
    </span>
  );
};

