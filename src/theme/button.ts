import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const baseStyle = defineStyle({
  borderRadius: { base: 'md', md: 'xl' }
})

const lg = defineStyle({
  borderRadius: { base: 'md', md: 'xl' },
  fontSize: 'md',
  fontWeight: 'bold',
  h: { base: '40px', md: '48px' },
  px: 4
})

const xl = defineStyle({
  borderRadius: { base: 'xl', md: '2xl' },
  fontSize: 'md',
  fontWeight: 'bold',
  h: { base: '48px', md: '48px' }
})

const primary = defineStyle(({ colorScheme: c }) => ({
  _active: {
    background: `${c}.600`
  },
  _dark: {
    background: `${c}.500`,
    dropShadow: '0px 4px 8px rgba(0, 0, 0, 0.24)'
  },
  _disabled: {
    borderBottom: 0
  },
  _hover: {
    _disabled: {
      background: `${c}.500`
    },
    background: `${c}.600`,
    borderBottomColor: `${c}.700`
  },
  background: `${c}.500`,
  border: '0px',
  borderBottom: '2px solid',
  borderBottomColor: `${c}.600`,
  borderRadius: 'full',
  color: 'white',
  dropShadow:
    c === 'accent'
      ? '0px 4px 16px rgba(80, 90, 216, 0.24)'
      : '0px 4px 8px rgba(0, 0, 0, 0.24)',
  fontSize: '16px'
}))

const outline = defineStyle({
  _dark: {
    _hover: { bg: 'joeDark.400' },
    bg: 'transparent'
  },
  _hover: {
    bg: 'joeLight.500'
  },
  bg: 'joeLight.300',
  border: '1px solid',
  borderColor: 'border'
})

const outlineBold = defineStyle({
  _dark: {
    _hover: { bg: 'joeDark.400' },
    bg: 'joeDark.700',
    borderColor: 'joeDark.400'
  },
  _hover: { bg: 'hover' },
  border: '2px solid',
  borderColor: 'joeLight.600',
  borderRadius: 'full'
})

export const buttonTheme = defineStyleConfig({
  baseStyle,
  sizes: { lg, xl },
  variants: { outline, 'outline-bold': outlineBold, primary }
})
