import { Box, Flex, Text } from '@chakra-ui/react'

export const Dictionary = () => {
  return (
    <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
      <Box width="1000px" className="pixel-border">
        <Text fontSize="35px" textShadow="0 5px #000000">
          Dictionary attack guide
        </Text>
        <iframe
          className="videos"
          src="https://www.youtube.com/embed/0xy1S2jquZ4"
          title="How to import wallet.dat"
          width="800"
          height="400"
          allowFullScreen
        />
      </Box>
    </Flex>
  )
}
