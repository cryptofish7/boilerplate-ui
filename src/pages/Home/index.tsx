import { Box } from '@chakra-ui/react'
import PageHelmet from 'components/PageHelmet'
import React from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const location = useLocation()
  return (
    <>
      <PageHelmet url={location.pathname} />
      <Box
        pt={{ base: 12, md: '80px' }}
        maxW={{ '2xl': '1600px', base: '1416px' }}
        margin="0 auto"
        minH="calc(100vh - 80px)"
        pb={{ base: 8, md: 16 }}
      >
        Home
      </Box>
    </>
  )
}

export default Home
