import { Heading, Link, VStack } from '@chakra-ui/react'
import React from 'react'

interface FooterSectionProps {
  items: { href: string; name: string }[]
  title: string
}

const FooterSection = ({ items, title }: FooterSectionProps) => (
  <VStack align="flex-start" spacing={4}>
    <Heading size="sm">{title}</Heading>
    {items.map((item, i) => (
      <Link
        key={i}
        aria-label={item.name}
        isExternal
        href={item.href}
        color="accent.500"
      >
        {item.name}
      </Link>
    ))}
  </VStack>
)

export default FooterSection
