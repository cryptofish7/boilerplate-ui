import { tagAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(tagAnatomy.keys)

const md = defineStyle({
  px: '8px',
  py: '4px'
})

const sizes = {
  md: definePartsStyle({ container: md, label: md })
}

const solid = definePartsStyle({
  container: {
    fontSize: 'xs',
    fontWeight: 'bold',
    rounded: 'full'
  }
})

const outline = definePartsStyle({
  container: {
    _dark: {
      borderColor: 'joeDark.500'
    },
    border: '1px solid',
    borderColor: 'joeLight.600',
    boxShadow: 'none',
    fontWeight: 'bold',
    rounded: 'full',
    textColor: 'textPrimary'
  }
})

export const tagTheme = defineMultiStyleConfig({
  sizes,
  variants: { outline, solid }
})
