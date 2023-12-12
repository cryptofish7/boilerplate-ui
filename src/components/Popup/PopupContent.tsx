import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Flex, HStack, Link, Text, UseToastOptions } from '@chakra-ui/react'
import React from 'react'

interface PopupContentProps {
  summary: string
  blockExplorer?: { name: string; url: string }
  subtitle?: string
}

const PopupContent = ({
  blockExplorer,
  id,
  status,
  subtitle,
  summary
}: PopupContentProps & UseToastOptions): JSX.Element => {
  const color = status === 'loading' ? 'textPrimary' : 'white'
  return (
    <Flex flexDir="column" align="flex-start" w="full" gap={1}>
      <Text textColor={color} fontWeight="semibold">
        {summary}
      </Text>
      {subtitle ? (
        <Text textColor={color} opacity={0.75} fontSize="sm">
          {subtitle}
        </Text>
      ) : null}
      {blockExplorer ? (
        <Link
          aria-label={`Link to ${blockExplorer?.name}`}
          isExternal
          href={`${blockExplorer?.url}/tx/${id}`}
          opacity="0.75"
          color={color}
          _hover={{ opacity: 0.5, textDecoration: 'underline' }}
        >
          <HStack>
            <Text textColor={color}>{`View on ${blockExplorer?.name}`}</Text>
            <ExternalLinkIcon color={color} />
          </HStack>
        </Link>
      ) : null}
    </Flex>
  )
}

export default PopupContent
