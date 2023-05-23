import { Box, Flex, Text } from '@chakra-ui/react'

export const Hashcat = () => {
  return (
    <Flex className="outer-flex">
      <Box className="pixel-border">
        <Text className="main-text">Hashcat tool introduction</Text>
        <iframe
          className="videos"
          src="https://www.youtube.com/embed/EfqJCKWtGiU"
          title="How to import wallet.dat"
          allowFullScreen
        />
      </Box>
    </Flex>
  )
}
