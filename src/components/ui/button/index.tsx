import { FC } from 'react';
import { Button as AntButton, ButtonProps } from 'antd'
import classNames from 'classnames';

import styles from './index.module.scss';

type CustomButtonProps = ButtonProps & {
  text?: string
  wide?: boolean
  theme?: 'dark' | 'light'
}

export const Button: FC<CustomButtonProps> = ({ text, wide = 'true', type, size, icon, theme = 'light', ...props }) => {
  return (
    <AntButton
      type={type ?? 'primary'}
      size={size ?? 'large'}
      className={classNames(
        styles.button, 
        {[styles.wide]: wide},
        {[styles.outlined]: wide },
        {[styles.iconOnly]: !!icon },
        { [styles.darkTheme]: theme === 'dark' }
      )}
      icon={icon}
      {...props}
    >
      {text}
    </AntButton>
  )
}