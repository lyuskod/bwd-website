import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Flex, Text } from '@chakra-ui/react'

export const Home = () => {
  const navigate = useNavigate()
  const navigateToWallets = () => navigate('/wallets')

  return (
    <Flex className="outer-flex">
      <Box className="pixel-border">
        <Text className="main-text">Welcome!</Text>
        <Text className="primary-text">
          Buy wallet.dat with balance and lost password
        </Text>
        <Text className="secondary-text">Just 30$ per wallet</Text>
        <Button className="pixel-button" onClick={navigateToWallets}>
          BUY
        </Button>
      </Box>
    </Flex>
  )
}
