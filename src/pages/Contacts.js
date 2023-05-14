import { Box, Flex, Text } from '@chakra-ui/react'

export const Contacts = () => {
    return (
        <Flex
            justify="center"
            align="center"
            height="100vh"
            paddingBottom="150px"
        >
            <Box width="520px">
                <div>
                    <Text fontSize="48px" textShadow="0 5px #000000">
                        Contacts
                    </Text>
                    <Text
                        fontSize="30px"
                        letterSpacing="-5.5%"
                        fontFamily="VT323"
                        textShadow="0 2px 2px #000000"
                    >
                        mail: admin@buywalletdat.com
                    </Text>
                </div>
                <div>
                    <Text
                        fontSize="30px"
                        letterSpacing="-5.5%"
                        fontFamily="VT323"
                        textShadow="0 2px 2px #000000"
                    >
                        telegram: @buywalletdat
                    </Text>
                </div>
            </Box>
        </Flex>
    )
}
