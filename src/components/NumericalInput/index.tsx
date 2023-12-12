import { Input, InputProps } from '@chakra-ui/react'
import React from 'react'

const escapeRegExp = (string: string): string =>
  string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string

const decimalRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`) // match escaped "." characters via in a non-capturing group
const integerRegex = RegExp(`^[0-9]*$`)

interface NumericalInputProps extends InputProps {
  inputType?: 'integer' | 'decimal'
  onValueChange?: (value: string) => void
}

const NumericalInput = ({
  inputType,
  onValueChange,
  ...props
}: NumericalInputProps) => {
  const enforcer = (nextUserInput: string) => {
    const regex = inputType === 'integer' ? integerRegex : decimalRegex
    if (nextUserInput === '' || regex.test(escapeRegExp(nextUserInput))) {
      onValueChange?.(nextUserInput)
    }
  }
  return (
    <Input
      borderColor="border"
      fontWeight="semibold"
      _placeholder={{ color: 'textSecondary', fontWeight: 'normal' }}
      fontSize="md"
      borderRadius={{ base: 'md', md: '2xl' }}
      inputMode="decimal"
      minLength={1}
      maxLength={79}
      type="text"
      pattern="^[0-9]*[.,]?[0-9]*$"
      onChange={(e) => enforcer(e.target.value.replace(/,/g, '.'))}
      {...props}
    />
  )
}

export default NumericalInput
