import {
  extendTheme,
  SystemStyleObject,
  ThemeComponents
} from '@chakra-ui/react'

import { buttonTheme } from './button'
import { fontStyle } from './fonts'
import { inputTheme } from './input'
import { menuTheme } from './menu'
import { modalTheme } from './modal'
import { popoverTheme } from './popover'
import { slidersTheme } from './slider'
import { statTheme } from './stat'
import { switchTheme } from './switch'
import { tableTheme } from './table'
import { tabsTheme } from './tabs'
import { tagTheme } from './tag'

const styles: { global: { [key: string]: SystemStyleObject } } = {
  global: {
    '#chakra-toast-manager-top-right': {
      top: 'calc(env(safe-area-inset-top, 0px) + var(--toast-top-offset)) !important',
      zIndex: '2 !important'
    },
    ':root': {
      '--toast-top-offset': '76px'
    },
    body: {
      bg: 'bgPrimary',
      transitionDuration: 'fast !important', // 150ms
      transitionProperty: 'background !important',
      transitionTimingFunction: 'ease-in-out !important'
    }
  }
}

const colors = {
  accent: {
    100: '#ebe9fe',
    200: '#ebe9fe',
    300: '#ebe9fe',
    400: '#c6bffb',
    500: '#8473ff',
    600: '#6754ef',
    700: '#4c3ad2',
    800: '#4c3ad2',
    900: '#4c3ad2'
  },
  avaxRed: '#e84142',
  candleGreen: '#54c273',
  candleRed: '#f7746d',
  green: {
    100: '#d5f5c9',
    200: '#93ee73',
    300: '#6fd24c',
    400: '#5eb53f',
    500: '#54903e'
  },
  joeDark: {
    300: '#9295bf',
    400: '#474a66',
    500: '#2f3146',
    600: '#1f202e',
    700: '#181823'
  },
  joeLight: {
    300: '#fbfbff',
    400: '#f0f0ff',
    500: '#ececfe',
    600: '#d5d5fb',
    700: '#8c8cb1'
  },
  textSecondaryDark: '#9295bf',
  textSecondaryLight: '#8c8cb1',
  wavaxBlue: '#7e84ff',
  yellowBar: '#fad65e'
}

const semanticTokens = {
  colors: {
    bgCard: {
      _dark: 'joeDark.600',
      _light: 'white'
    },
    bgPrimary: {
      _dark: 'joeDark.700',
      _light: 'joeLight.300'
    },
    bgSecondary: {
      _dark: 'joeDark.600',
      _light: 'joeLight.400'
    },
    bgTertiary: {
      _dark: 'joeDark.500',
      _light: 'joeLight.500'
    },
    border: {
      _dark: 'joeDark.500',
      _light: 'joeLight.500'
    },
    graphGreenDark: '#1ca07a',
    graphGreenLight: '#b3e3d5',
    graphGreenOutline: '#5ec5a2',
    graphPurpleDark: '#793cee',
    graphPurpleLight: '#d9c7fc',
    graphPurpleOutline: '#894bf6',
    hover: {
      _dark: 'joeDark.500',
      _light: 'joeLight.500'
    },
    textPrimary: {
      _dark: 'white',
      _light: '#190037'
    },
    textSecondary: {
      _dark: 'textSecondaryDark',
      _light: 'textSecondaryLight'
    }
  }
}

const components: ThemeComponents = {
  Button: buttonTheme,
  Heading: {
    baseStyle: {
      fontWeight: 'semibold'
    }
  },
  Input: inputTheme,
  Menu: menuTheme,
  Modal: modalTheme,
  Popover: popoverTheme,
  Slider: slidersTheme,
  Stat: statTheme,
  Switch: switchTheme,
  Table: tableTheme,
  Tabs: tabsTheme,
  Tag: tagTheme,
  Text: {
    baseStyle: {
      color: 'textPrimary'
    }
  }
}

const fonts = {
  body: fontStyle,
  heading: fontStyle,
  html: fontStyle
}

const shadows = {
  joeDark: '0px 8px 16px -8px rgba(0, 0, 0, 0.16)',
  joeLight: '0px 8px 24px -8px rgba(175, 178, 237, 0.24)'
}

export const chakraTheme = extendTheme({
  colors,
  components,
  fonts,
  semanticTokens,
  shadows,
  styles
})
