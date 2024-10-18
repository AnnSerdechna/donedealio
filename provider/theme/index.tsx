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
          colorText: '#444',
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
            colorLink: variables.primaryColor
          },
          Menu: {
            itemSelectedBg: variables.bgGreyColor,
            itemHoverBg: variables.bgGreyColor,
            itemBg: 'transparent',
          },
          Layout: {
            headerHeight: 56,
            headerBg: variables.whiteColor,
            siderBg: variables.whiteColor,
            triggerBg: variables.whiteColor,
          },
          Form: {
            itemMarginBottom: 0,
            verticalLabelMargin: 0,
            verticalLabelPadding: 0,
          },
          Avatar: {
            colorTextPlaceholder: variables.primaryColor,
          },
          Button: {
            defaultBg: 'transparent',
            colorLink: variables.primaryColor
          },
          Input: {
            sizeLG: 56
          }
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}