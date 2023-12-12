import { tableAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  td: {
    fontSize: 'sm',
    fontWeight: 'bold'
  },
  th: {
    color: 'textSecondary',
    fontWeight: 'normal'
  }
})

const thStyle = {
  _dark: {
    color: 'joeDark.300'
  },
  borderBottom: '0',
  color: 'joeLight.700'
}

const variantSimple = definePartsStyle(() => ({
  td: {
    borderBottom: '0'
  },
  th: thStyle
}))

const variantCard = definePartsStyle(() => ({
  td: {
    _groupHover: {
      bg: 'hover'
    },
    bg: 'bgCard',
    border: 0,
    borderBottom: '1px',
    borderBottomColor: 'border',
    borderTop: '1px',
    borderTopColor: 'border'
  },
  th: thStyle
}))

export const tableTheme = defineMultiStyleConfig({
  baseStyle,
  variants: { card: variantCard, simple: variantSimple }
})
