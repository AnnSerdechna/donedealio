'use client';

import { ConfigProvider } from 'antd';
import { FC, PropsWithChildren } from 'react';
import { Roboto } from 'next/font/google';

import variables from '@/styles/variables.module.scss';

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: variables.primaryColor,
          fontSize: 15,
          fontFamily: roboto.style.fontFamily,
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
            itemSelectedBg: 'rgba(0, 0, 0, 0.06)',
            // darkItemBg: variables.darkBg,
            // darkItemSelectedBg: variables.darkBgSelected,
            // darkPopupBg: variables.darkBg,
            // darkSubMenuItemBg: variables.darkBg,
            // darkItemHoverBg: variables.darkBgSelected,
            itemBg: 'transparent',
          },
          Layout: {
            headerBg: 'transparent',
            siderBg: '#f5f5f5',
            triggerBg: '#f5f5f5',
            triggerColor: '#111'
          },
          Form: {
            itemMarginBottom: 16,
          },
          Input: {
          },
          Avatar: {
            colorTextPlaceholder: variables.primaryColor,
          },
          Button: {
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