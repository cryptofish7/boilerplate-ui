import { Button, ButtonProps } from '@chakra-ui/react'
import React from 'react'

interface MaxButtonProps {
  onClick: () => void
  balance?: string
}

const MaxButton = ({
  balance,
  onClick,
  ...props
}: MaxButtonProps & ButtonProps) => {
  if (!balance) return null
  return (
    <Button
      flexShrink={0}
      bg="joeLight.400"
      _dark={{
        _hover: {
          bg: 'joeDark.400'
        },
        bg: 'joeDark.500'
      }}
      _hover={{
        bg: 'joeLight.500'
      }}
      borderRadius="full"
      px={2}
      py={1}
      textTransform="uppercase"
      onClick={onClick}
      size="xs"
      fontWeight="semibold"
      {...props}
    >
      Max
    </Button>
  )
}

export default MaxButton
