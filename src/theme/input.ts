import { inputAnatomy } from '@chakra-ui/anatomy'
import {
  createMultiStyleConfigHelpers,
  Input,
  NumberInput
} from '@chakra-ui/react'

Input.defaultProps = { ...Input.defaultProps, focusBorderColor: 'accent.500' }
NumberInput.defaultProps = {
  ...NumberInput.defaultProps,
  focusBorderColor: 'accent.500'
}

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  inputAnatomy.keys
)

export const inputTheme = defineMultiStyleConfig({})
