import Link, { LinkProps } from 'next/link'
import { FC } from 'react'

import styles from './index.module.scss';
import classNames from 'classnames';

type LinkBtnProps = LinkProps & {
  text: string
  type?: 'primary' | 'outlined'
}

export const LinkBtn: FC<LinkBtnProps> = ({ text, type = 'primary', ...props }) => {
  return (
    <Link 
      className={classNames(
        styles.linkBtn, 
        { [styles.outlined]: type === 'outlined'},
      )}
      {...props}
    >
      {text}
    </Link>
  )
}