import { Box, Tooltip, TooltipProps } from '@chakra-ui/react'
import React, { useState } from 'react'

const TouchFriendlyTooltip = ({ children, ...props }: TooltipProps) => {
  const [isOpen, setIsTooltipOpen] = useState(false)

  return (
    <Tooltip isOpen={isOpen} {...props}>
      <Box
        onMouseEnter={() => setIsTooltipOpen(true)}
        onMouseLeave={() => setIsTooltipOpen(false)}
      >
        {children}
      </Box>
    </Tooltip>
  )
}

export default TouchFriendlyTooltip
