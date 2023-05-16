import { useNavigate } from 'react-router-dom'
import { Box, Flex, Text, Link } from '@chakra-ui/react'

export const Tools = () => {
    const navigate = useNavigate()
    const navigateWalletHash = () => navigate('/tools/wallethash')
    const navigateFakeWalletCheck = () => navigate('/tools/walletcheck')

    return (
        <Flex
            justify="center"
            align="center"
            height="100vh"
            paddingBottom="150px"
        >
            <Box width="520px">
                <Box>
                    <Text fontSize="48px" textShadow="0 5px #000000">
                        Tools
                    </Text>
                    <Link
                        fontSize="50px"
                        letterSpacing="-5.5%"
                        fontFamily="VT323"
                        textShadow="0 2px 2px #000000"
                        isExternal
                        color="white"
                        textDecoration="none"
                        cursor="pointer"
                        onClick={navigateFakeWalletCheck}
                        _hover={{ color: '#fa690e' }}
                    >
                        Fake Wallet Checker
                    </Link>
                </Box>
                <Box>
                    <Link
                        fontSize="50px"
                        letterSpacing="-5.5%"
                        fontFamily="VT323"
                        textShadow="0 2px 2px #000000"
                        isExternal
                        color="white"
                        textDecoration="none"
                        onClick={navigateWalletHash}
                        cursor="pointer"
                        _hover={{ color: '#fa690e' }}
                    >
                        Wallet Hasher
                    </Link>
                </Box>
            </Box>
        </Flex>
    )
}
