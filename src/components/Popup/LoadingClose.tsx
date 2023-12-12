import { CloseIcon } from '@chakra-ui/icons'
import { Box, Center, keyframes } from '@chakra-ui/react'
import React from 'react'

const circleAnimation = keyframes`
  0% { stroke-dashoffset: 0px; }
  100% { stroke-dashoffset: 75px; }
`

interface LoadingCloseProps {
  isAnimationPaused: boolean
  onClick: () => void
  timeout: number
}

const LoadingClose = ({
  isAnimationPaused,
  onClick,
  timeout
}: LoadingCloseProps): JSX.Element => (
  <Center
    pos="relative"
    h="30px"
    w="30px"
    flexShrink={0}
    alignItems="center"
    cursor="pointer"
    onClick={onClick}
  >
    <Box
      as="svg"
      pos="absolute"
      top="0px"
      left="0px"
      width="30px"
      height="30px"
      transform="rotateY(-180deg) rotateZ(-90deg)"
    >
      {isAnimationPaused ? null : (
        <Box
          as="circle"
          r="12"
          cx="15"
          cy="15"
          animation={`${timeout}ms linear 0s 1 normal forwards running ${circleAnimation}`}
          strokeDasharray="75px"
          strokeDashoffset="0px"
          strokeLinecap="round"
          strokeWidth="1px"
          stroke="white"
          opacity={0.4}
          fill="none"
        />
      )}
    </Box>
    <CloseIcon pos="absolute" color="white" boxSize="10px" />
  </Center>
)

export default LoadingClose
