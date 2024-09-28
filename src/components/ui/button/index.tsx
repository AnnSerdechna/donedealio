import { FC } from 'react';
import { Button as AntButton, ButtonProps } from 'antd'
import classNames from 'classnames';

import styles from './index.module.scss';

type CustomButtonProps = ButtonProps & {
  text: string
  wide?: boolean
}

export const Button: FC<CustomButtonProps> = ({ text, wide = 'true', type, size, ...props }) => {
  return (
    <AntButton
      type={type ?? 'primary'}
      size={size ?? 'large'}
      className={classNames(
        styles.button, 
        {[styles.wide]: wide}
      )}
      {...props}
    >
      {text}
    </AntButton>
  )
}