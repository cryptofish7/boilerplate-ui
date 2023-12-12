import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

export const menuListStyle = {
  _dark: {
    bg: 'joeDark.600',
    boxShadow: 'joeDark'
  },
  bg: 'joeLight.300',
  borderRadius: { base: 'md', md: 'xl' },
  boxShadow: 'joeLight'
}

const baseStyle = defineStyle({
  button: {
    bg: 'transparent',
    border: '1px solid',
    borderColor: 'border'
  },
  item: {
    _dark: {
      _hover: { bg: 'joeDark.400' },
      bg: 'joeDark.600'
    },
    _hover: { bg: 'joeLight.400' },
    bg: 'joeLight.300',
    borderRadius: 'lg',
    px: 2
  },
  list: {
    ...menuListStyle,
    display: 'flex',
    flexDir: 'column',
    gap: 0.5,
    p: 2
  }
})

export const menuTheme = defineStyleConfig({
  baseStyle
})
