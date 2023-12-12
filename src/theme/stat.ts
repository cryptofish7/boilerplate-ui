import { statAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(statAnatomy.keys)

const baseStyle = definePartsStyle({
  container: {
    _dark: { bg: 'joeDark.600', border: 0 },
    bg: 'white',
    border: '1px solid',
    borderColor: 'border',
    borderRadius: '2xl',
    px: { base: 4, md: 8 },
    py: 4,
    w: 'full'
  },
  helpText: {
    fontWeight: 'semibold'
  },
  label: {
    textColor: 'textSecondary'
  }
})

const positive = definePartsStyle({
  ...baseStyle,
  helpText: {
    color: 'green.400'
  }
})

const negative = definePartsStyle({
  ...baseStyle,
  helpText: {
    color: 'red.400'
  }
})

export const statTheme = defineMultiStyleConfig({
  baseStyle,
  variants: { negative, positive }
})
