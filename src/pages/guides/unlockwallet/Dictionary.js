import { Box, Flex, Text } from '@chakra-ui/react'

export const Dictionary = () => {
  return (
    <Flex className="outer-flex">
      <Box className="pixel-border">
        <Text className="main-text">Dictionary attack guide</Text>
        <iframe
          className="videos"
          src="https://www.youtube.com/embed/0xy1S2jquZ4"
          title="How to import wallet.dat"
          allowFullScreen
        />
      </Box>
    </Flex>
  )
}
