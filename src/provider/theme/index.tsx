'use client'
import { ConfigProvider } from 'antd';
import { FC, PropsWithChildren } from 'react';
import { Noto_Sans } from 'next/font/google';

import variables from '@/styles/variables.module.scss';

const notoSans = Noto_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700', '900' ]});

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: variables.primaryColor,
          fontSize: 16,
          fontFamily: notoSans.style.fontFamily,
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
            darkItemBg: variables.darkBg,
            darkItemSelectedBg: variables.darkBgSelected,
            darkPopupBg: variables.darkBg,
            darkSubMenuItemBg: variables.darkBg,
            darkItemHoverBg: variables.darkBgSelected,
          },
          Layout: {
            headerBg: 'transparent',
            siderBg: variables.darkBg,
            triggerBg: variables.darkBg,
            // headerPadding: `0 ${variables.sizeLg}`
          },
        
          Badge: {
            colorError: variables.primaryColor,
          },
          Form: {
            itemMarginBottom: 16,
          },
          Avatar: {
            colorTextPlaceholder: variables.primaryColor,
          },
          Checkbox: {
            controlInteractiveSize: 18
          },
          Button: {
            onlyIconSizeSM: 20,
            defaultBg: 'transparent',
            defaultColor: variables.secondaryColor,
            defaultBorderColor: variables.secondaryColor,
          },
          Drawer: {
            colorBgElevated: variables.darkBg,
            colorIcon: variables.textDarkColor,
            colorText: variables.textDarkColor,
            colorSplit: 'transparent',
          },
          Modal: {
            colorBgMask: 'rgba(80, 95, 152, 0.5)',
          }
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}