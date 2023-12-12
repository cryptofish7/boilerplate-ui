import { Flex, Link } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

interface HeaderLinkProps {
  title: string
  to: string
}

interface IconHeaderLinkProps {
  children: React.ReactNode
  to: string
}

const HeaderLink = ({ title, to }: HeaderLinkProps) => {
  return (
    <Link
      as={NavLink}
      to={`/${to}`}
      fontWeight="semibold"
      color="textSecondary"
      textAlign="center"
      px={4}
      py={2}
      borderRadius="xl"
      _hover={{ bg: 'bgTertiary', textDecor: 'none' }}
      _activeLink={{ color: 'textPrimary' }}
    >
      {title}
    </Link>
  )
}

export const IconHeaderLink = ({ children, to }: IconHeaderLinkProps) => {
  return (
    <Link
      as={NavLink}
      to={`/${to}`}
      fontWeight="semibold"
      color="textSecondary"
      textAlign="center"
      px={4}
      py={2}
      borderRadius="xl"
      _hover={{ bg: 'bgTertiary', textDecor: 'none' }}
      _activeLink={{ color: 'textPrimary' }}
    >
      <Flex alignItems="center" justifyContent="center">
        {children}
      </Flex>
    </Link>
  )
}

export default HeaderLink
