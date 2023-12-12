import { sliderAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  sliderAnatomy.keys
)

const baseStyle = {
  filledTrack: {
    _dark: { background: 'accent.600' },
    background: 'accent.400'
  },
  thumb: {
    background: 'accent.500',
    border: '4px solid',
    borderColor: 'white',
    boxSize: 7,
    dropShadow: '0px 0px 16px -4px rgba(0, 0, 0, 0.32)'
  },
  track: {
    _dark: { background: 'joeDark.400' },
    background: 'accent.100',
    h: 4
  }
}

export const slidersTheme = defineMultiStyleConfig({
  baseStyle
})
