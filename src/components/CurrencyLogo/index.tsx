import { Image, ImageProps } from '@chakra-ui/react'
import APTLogo from 'assets/apt-token-icon.png'
import AvaxLogo from 'assets/avalanche.svg'
import BNBLogo from 'assets/bnb-chain.svg'
import EtherLogo1x from 'assets/ether_1x.webp'
import EtherLogo2x from 'assets/ether_2x.webp'
import EtherLogo3x from 'assets/ether_3x.webp'
import PlaceholderLogo from 'assets/token-logo-placeholder.svg'
import React from 'react'
import { getAddress, isAddress } from 'viem'

export const getTokenLogoURL = (address: string) =>
  `https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/${address}/logo.png`

interface CurrencyLogoProps {
  address?: string
  symbol?: string
}

const CurrencyLogo = ({
  address,
  symbol,
  ...props
}: CurrencyLogoProps & ImageProps) => {
  if (symbol === 'AVAX') {
    return <Image alt="avalanche-logo" src={AvaxLogo} {...props} />
  }
  if (symbol === 'ETH') {
    return (
      <Image
        alt="ether-logo"
        fallbackSrc={EtherLogo3x}
        srcSet={`${EtherLogo1x} 1x ${EtherLogo2x} 2x ${EtherLogo3x} 3x`}
        {...props}
      />
    )
  }
  if (symbol === 'BNB' || symbol === 'tBNB') {
    return <Image alt="bnb-logo" src={BNBLogo} {...props} />
  }
  if (symbol === 'APT') {
    return <Image alt="apt-logo" src={APTLogo} {...props} />
  }
  if (!address || !isAddress(address)) {
    return (
      <Image
        alt="placeholder-logo"
        borderRadius="full"
        bg="white"
        src={PlaceholderLogo}
        {...props}
      />
    )
  }
  return (
    <Image
      alt={`${symbol}-token-logo`}
      src={getTokenLogoURL(getAddress(address))}
      borderRadius="full"
      fallback={
        <Image
          alt="placeholder-token-logo"
          src={PlaceholderLogo}
          borderRadius="full"
          bg="white"
          {...props}
        />
      }
      fallbackStrategy="onError"
      {...props}
    />
  )
}

export default CurrencyLogo
