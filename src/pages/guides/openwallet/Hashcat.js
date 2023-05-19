import { Box, Flex, Text } from '@chakra-ui/react'

export const Hashcat = () => {
  return (
    <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
      <Box width="1000px" className="pixel-border">
        <Text fontSize="35px" textShadow="0 5px #000000">
          Hashcat tool introduction
          <iframe
            className="videos"
            src="https://www.youtube.com/embed/EfqJCKWtGiU"
            title="How to import wallet.dat"
            width="800"
            height="400"
            allowFullScreen
          />
        </Text>
      </Box>
    </Flex>
  )
}
