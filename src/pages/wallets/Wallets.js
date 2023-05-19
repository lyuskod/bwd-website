import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { WalletsTable } from './WalletsTable'

export const Wallets = () => {
  return (
    <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
      <Box>
        <Text fontSize="40px" textShadow="0 5px #000000">
          Wallets
        </Text>
        <WalletsTable />
      </Box>
    </Flex>
  )
}
