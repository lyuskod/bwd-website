import { Box, Flex, Text, Link } from '@chakra-ui/react'

export const Dictionary = () => {
    return (
        <Flex
            justify="center"
            align="center"
            height="100vh"
            paddingBottom="150px"
        >
            <Box width="1000px">
                <Text fontSize="35px" textShadow="0 5px #000000">
                    Dictionary attack guide
                </Text>
                <Text
                    fontSize="30px"
                    letterSpacing="-5.5%"
                    fontFamily="VT323"
                    textShadow="0 2px 2px #000000"
                >
                    <Link
                        isExternal
                        href="https://weakpass.com/"
                        _hover={{
                            color: '#fa690e',
                        }}
                        color="white"
                        textDecoration="none"
                    >
                        {'-> Dictionary collection <- '}
                    </Link>
                </Text>

                <iframe
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
