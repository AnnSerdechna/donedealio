import { ConfigProvider } from 'antd';
import { FC, PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const colorPrimary = '#1677ff';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colorPrimary,
          fontSize: 14,
          fontFamily: inter.style.fontFamily,
        },
        components: {
          Typography: {
            titleMarginBottom: 0,
            titleMarginTop: 0,
            fontSizeHeading1: 28,
          },
          Layout: {
            headerBg: 'transparent',
          },
          Badge: {
            colorError: colorPrimary,
          },
          Form: {
            itemMarginBottom: 16
          },
          Avatar: {
            colorTextPlaceholder: colorPrimary,
          },
          Checkbox: {
            controlInteractiveSize: 18
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}