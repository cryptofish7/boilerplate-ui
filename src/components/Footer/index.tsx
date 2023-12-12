import { Box, Link, LinkProps } from '@chakra-ui/react'
import React from 'react'

const SocialNetworkLink = (props: LinkProps) => (
  <Link
    isExternal
    display="flex"
    alignItems="center"
    justifyContent="center"
    borderRadius="full"
    bg="accent.400"
    boxSize="40px"
    _hover={{ bg: 'accent.500' }}
    _active={{ bg: 'accent.500' }}
    {...props}
  />
)

const Footer = () => {
  return (
    <Box width="full" bgColor="bgPrimary">
      <Box
        maxW={{ '2xl': '1600px', base: '1400px' }}
        margin="0 auto"
        p={4}
        pt={{ base: 4, md: 12 }}
        pb={{ base: 4, md: 8 }}
      >
        FOOTER
      </Box>
    </Box>
  )
}

export default Footer
