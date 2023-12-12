import { Box, Button, ButtonProps } from '@chakra-ui/react'
import React from 'react'
import { formattedNum } from 'utils/format'

interface InputBalanceButtonProps {
  balance: string
}

const InputBalanceButton = ({
  balance,
  ...props
}: InputBalanceButtonProps & ButtonProps) => (
  <Button data-cy="input-balance-button" variant="ghost" size="xs" {...props}>
    <Box as="span" color="textSecondary" pr={0.5}>
      Balance:{' '}
    </Box>
    {formattedNum(balance)}
  </Button>
)

export default InputBalanceButton
