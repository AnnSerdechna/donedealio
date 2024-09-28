import { ConfigProvider } from 'antd';
import { FC, PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const colorPrimary = '#1677ff';
const darkBgColor = '#333';
const darkSelectedBgColor = "#444";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colorPrimary,
          fontSize: 16,
          fontFamily: inter.style.fontFamily,
        },
        components: {
          Typography: {
            titleMarginBottom: 0,
            titleMarginTop: 0,
            fontSizeHeading1: 40,
            fontSizeHeading2: 32,
            fontSizeHeading3: 28,
            fontSizeHeading4: 24,
          },
          Menu: {
            darkItemBg: darkBgColor,
            darkItemSelectedBg: darkSelectedBgColor,
            darkPopupBg: darkBgColor,
            darkSubMenuItemBg: darkBgColor,
            darkItemHoverBg: darkSelectedBgColor,
          },
          Layout: {
            headerBg: 'transparent',
            siderBg: darkBgColor,
            triggerBg: darkBgColor,
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