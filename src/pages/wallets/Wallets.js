import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { WalletsTable } from './WalletsTable'

export const Wallets = () => {
  return (
    <Flex className="outer-flex">
      <Box className="pixel-border">
        <Text className="main-text">Wallets</Text>
        <WalletsTable />
      </Box>
    </Flex>
  )
}
