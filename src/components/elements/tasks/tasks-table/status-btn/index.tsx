import { Button, ButtonProps } from 'antd';
import { FC } from 'react';

import styles from './index.module.scss';
import classNames from 'classnames';

type StatusButtonProps = ButtonProps & { text: string, backgroundColor: string };

export const StatusButton: FC<StatusButtonProps> = ({ text, backgroundColor, ...props }) => (
  <Button
    style={{ background: backgroundColor }}
    className={classNames(styles.statusButton, {[styles.default]: !text})}
    type={'text'}
    {...props}
  >
    {text}
  </Button>
)