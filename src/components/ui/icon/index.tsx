import { FC, ReactNode } from 'react';

type StyledIconProps = {
  icon: ReactNode;
  size?: string;
  color?: string;
}

export const Icon: FC<StyledIconProps> = ({ icon, size = '1.2em', color = '' }) => {
  return (
    <span style={{ fontSize: size, color }}>
      {icon}
    </span>
  );
};
