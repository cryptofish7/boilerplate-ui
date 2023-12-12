import { popoverAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

import { menuListStyle } from './menu'

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle(() => ({
  body: { py: 4 },
  closeButton: {
    top: 2
  },
  content: menuListStyle
}))

export const popoverTheme = defineMultiStyleConfig({
  baseStyle,
  variants: {
    responsive: {
      content: { width: 'unset' }
    }
  }
})
