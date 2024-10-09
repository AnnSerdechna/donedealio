import { FC } from 'react';
import { Button as AntButton, ButtonProps } from 'antd'
import classNames from 'classnames';

import styles from './index.module.scss';

type CustomButtonProps = ButtonProps & {
  text?: string
  wide?: boolean
  theme?: 'dark' | 'light'
}

export const Button: FC<CustomButtonProps> = ({ text, wide = false, type, size, icon, theme = 'light', ghost, ...props }) => {
  return (
    <AntButton
      type={type ?? 'primary'}
      size={size ?? 'large'}
      className={classNames(
        styles.button, 
        {[styles.wide]: wide},
      )}
      icon={icon}
      {...props}
    >
      {text}
    </AntButton>
  )
}