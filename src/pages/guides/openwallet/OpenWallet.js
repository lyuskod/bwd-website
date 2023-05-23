import { Box, Flex, Text } from '@chakra-ui/react'

export const OpenWallet = () => {
  return (
    <Flex>
      <Box className="pixel-border">
        <Text className="main-text">How to open wallet.dat</Text>
        <iframe
          className="videos"
          src="https://www.youtube.com/embed/KtbaYccEHr4"
          title="How to import wallet.dat"
          allowFullScreen
        />
      </Box>
    </Flex>
  )
}
