import { Box, Flex, Text } from '@chakra-ui/react'

export const Bruteforce = () => {
    return (
        <Flex
            justify="center"
            align="center"
            height="100vh"
            paddingBottom="150px"
        >
            <Box width="1000px">
                <Text fontSize="35px" textShadow="0 5px #000000">
                    Brute force attack guide
                </Text>
                <iframe
                    src="https://www.youtube.com/embed/d1Y6TPGzVn0"
                    title="How to import wallet.dat"
                    width="800"
                    height="400"
                    allowFullScreen
                />
            </Box>
        </Flex>
    )
}
