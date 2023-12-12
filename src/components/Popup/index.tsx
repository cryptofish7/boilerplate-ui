import { Flex, Spinner, useToast, UseToastOptions } from '@chakra-ui/react'
import React, { useState } from 'react'

import LoadingClose from './LoadingClose'
import PopupContent from './PopupContent'

interface PopupProps {
  summary: string
  blockExplorer?: { name: string; url: string }
  subtitle?: string
}

const Popup = (props: PopupProps & UseToastOptions): JSX.Element => {
  const toast = useToast()
  const [isMouseOver, setIsMouseOver] = useState(false)
  const { id, status } = props

  let bg = ''
  let darkBg: string | undefined
  switch (status) {
    case 'success':
      bg = '#71bd98'
      break
    case 'error':
      bg = '#e87b72'
      break
    case 'loading':
      bg = 'bgPrimary'
      darkBg = 'bgTertiary'
      break
    case 'info':
      bg = 'blue.100'
      break
    case 'warning':
      bg = 'yellow.100'
      break
  }

  return (
    <Flex
      pos="relative"
      justify="space-between"
      align="center"
      w="full"
      py={3}
      px={4}
      borderRadius="xl"
      boxShadow="md"
      gap={4}
      minH="54px"
      minW={{ base: 'full', xs: '375px' }}
      maxW="375px"
      bg={bg}
      _dark={darkBg ? { bg: darkBg } : undefined}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <PopupContent {...props} />
      {status === 'loading' ? (
        <Flex align="center" justify="center" h="30px" w="30px">
          <Spinner size="sm" />
        </Flex>
      ) : id ? (
        <LoadingClose
          timeout={6500}
          isAnimationPaused={isMouseOver}
          onClick={() => toast.close(id)}
        />
      ) : null}
    </Flex>
  )
}

export default Popup
