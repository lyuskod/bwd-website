import { Box, Flex, Text } from '@chakra-ui/react'

export const OpenWallet = () => {
    return (
        <Flex
            justify="center"
            align="center"
            height="100vh"
            paddingBottom="150px"
        >
            <Box width="1000px">
                <Text fontSize="35px" textShadow="0 5px #000000">
                    How to open wallet.dat
                </Text>
                <iframe
                    src="https://www.youtube.com/embed/KtbaYccEHr4"
                    title="How to import wallet.dat"
                    width="800"
                    height="400"
                    allowFullScreen
                />
            </Box>
        </Flex>
    )
}
