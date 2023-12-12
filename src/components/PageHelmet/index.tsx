import metatagImage from 'assets/metatagimage_1x.webp'
import React from 'react'
import { Helmet } from 'react-helmet'

interface PageHelmetProps {
  url: string
  description?: string
  title?: string
}

const PageHelmet = ({ description, title, url }: PageHelmetProps) => (
  <Helmet>
    <title>{title ?? 'Trader Joe XYZ | Leading Decentralized Exchange'}</title>
    <meta
      name="description"
      content={
        description ??
        'Discover DeFi with Trader Joe, a leading decentralized exchange. Trade a wide variety of tokens, earn rewards, and engage in secure, peer-to-peer transactions. Trader Joe makes DeFi easy and accessible.'
      }
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`https://traderjoexyz.com/${url}`} />
    <meta
      property="og:title"
      content={title ?? 'Trader Joe XYZ | Leading Decentralized Exchange'}
    />
    <meta
      property="og:description"
      content={
        description ??
        'Discover DeFi with Trader Joe, a leading decentralized exchange. Trade a wide variety of tokens, earn rewards, and engage in secure, peer-to-peer transactions. Trader Joe makes DeFi easy and accessible.'
      }
    />
    <meta property="og:image" content={metatagImage} />
    <meta property="twitter:card" content={metatagImage} />
    <meta property="twitter:url" content={`https://traderjoexyz.com/${url}`} />
    <meta
      property="twitter:title"
      content={title ?? 'Trader Joe XYZ | Leading Decentralized Exchange'}
    />
    <meta
      property="twitter:description"
      content={
        description ??
        'Discover DeFi with Trader Joe, a leading decentralized exchange. Trade a wide variety of tokens, earn rewards, and engage in secure, peer-to-peer transactions. Trader Joe makes DeFi easy and accessible.'
      }
    />
    <meta property="twitter:image" content={metatagImage} />
  </Helmet>
)

export default PageHelmet
