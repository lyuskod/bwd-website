import { Box, Flex, Text } from '@chakra-ui/react'

export const Bruteforce = () => {
  return (
    <Flex className="outer-flex">
      <Box className="pixel-border">
        <Text className="main-text">Brute force attack guide</Text>
        <iframe
          className="videos"
          src="https://www.youtube.com/embed/d1Y6TPGzVn0"
          title="How to import wallet.dat"
          allowFullScreen
        />
      </Box>
    </Flex>
  )
}
