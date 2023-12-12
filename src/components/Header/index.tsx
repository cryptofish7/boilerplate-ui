import { Center, Flex, FlexProps, Hide, HStack, Image } from '@chakra-ui/react'
import TraderJoeLogo from 'assets/trader-joe_1x.webp'
import TraderJoeLogo2x from 'assets/trader-joe_2x.webp'
import TraderJoeLogo3x from 'assets/trader-joe_3x.webp'
import ConnectButton from 'components/ConnectButton'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import HeaderLink from './HeaderLink'

const HeaderContent = (): JSX.Element => {
  return (
    <Flex
      alignItems="center"
      justify="space-between"
      w="full"
      maxW="1600px"
      margin="0 auto"
      p={4}
      gap={4}
    >
      <Flex gap={6} flexShrink={0}>
        <Center
          as={Link}
          aria-label="Link to Home page"
          to={`/`}
          flexShrink={0}
        >
          <Image
            objectFit="contain"
            fallbackSrc={TraderJoeLogo2x}
            srcSet={`${TraderJoeLogo} 1x ${TraderJoeLogo2x} 2x ${TraderJoeLogo3x} 3x`}
            transition="transform 0.3s ease"
            boxSize={12}
            _hover={{ transform: 'rotate(4deg)' }}
          />
        </Center>
        <Hide below="lg">
          <HStack spacing={4} flexShrink={0}>
            <HeaderLink
              aria-label="Link to Trade page"
              to="page1"
              title="Page 1"
            />
            <HeaderLink
              aria-label="Link to Stake page"
              to="page2"
              title="Page 2"
            />
          </HStack>
        </Hide>
      </Flex>

      <Flex columnGap={4} flexShrink={0}>
        <ConnectButton />
      </Flex>
    </Flex>
  )
}

const HeaderContainer = (props: FlexProps) => {
  const [isBorderVisible, setIsBorderVisible] = useState(false)

  useEffect(() => {
    const updatePosition = () => {
      setIsBorderVisible(window.scrollY > 0)
    }
    document.addEventListener('scroll', updatePosition)
    return () => {
      document.removeEventListener('scroll', updatePosition)
    }
  }, [])

  return (
    <Flex
      zIndex={11}
      position="sticky"
      width="full"
      top={0}
      minH="80px"
      flexDir="column"
      bg="joeLight.400"
      _dark={{ bg: 'joeDark.600' }}
      borderBottom="1px"
      borderBottomColor={isBorderVisible ? 'border' : 'transparent'}
      padding={{
        base: '1rem 0.25rem 1rem 1rem',
        md: '1rem 2rem',
        xs: '1rem'
      }}
      {...props}
    />
  )
}

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent />
    </HeaderContainer>
  )
}

export default Header
