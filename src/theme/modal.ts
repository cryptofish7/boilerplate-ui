import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  closeButton: {
    _hover: { bg: 'hover' },
    bg: 'bgSecondary',
    borderRadius: 'full',
    boxSize: '40px',
    color: 'textPrimary',
    top: 2
  },
  dialog: {
    bg: 'bgPrimary',
    borderBottomRadius: { base: 0, sm: '2xl' },
    borderRadius: '2xl'
  },
  dialogContainer: {
    '@supports(height: -webkit-fill-available)': {},
    alignItems: { base: 'flex-end', sm: 'center' },
    bottom: { base: 0, sm: 'unset' },
    left: 0,
    right: { base: 0, sm: 'unset' },
    top: { base: 'auto', sm: 0 }
  },
  header: {
    fontColor: 'textPrimary',
    fontSize: 'xl',
    fontWeight: 'bold'
  },
  overlay: {
    backdropFilter: 'blur(8px)'
  }
})

export const modalTheme = defineMultiStyleConfig({
  baseStyle
})
